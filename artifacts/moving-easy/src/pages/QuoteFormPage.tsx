import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { Truck, ArrowLeft, ArrowRight, CheckCircle, Info, MapPin, Building, Calendar as CalendarIcon, Package, User, Mail, Phone, ShieldCheck, Lock, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StepIndicator } from "@/components/StepIndicator";

type FormData = {
  fromAddress: string;
  toAddress: string;
  moveDate: string;
  moveTime: string;
  bedrooms: string;
  truckSize: string;
  accessNotes: {
    stairsPickup: boolean;
    stairsDropoff: boolean;
    longCarry: boolean;
    elevator: boolean;
    narrowDriveway: boolean;
    heavyItems: boolean;
  };
  details: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: string;
  termsAgreed: boolean;
};

const initialFormData: FormData = {
  fromAddress: "",
  toAddress: "",
  moveDate: "",
  moveTime: "",
  bedrooms: "",
  truckSize: "",
  accessNotes: {
    stairsPickup: false,
    stairsDropoff: false,
    longCarry: false,
    elevator: false,
    narrowDriveway: false,
    heavyItems: false,
  },
  details: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  source: "",
  termsAgreed: false,
};

export default function QuoteFormPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const updateAccessNote = (note: keyof FormData["accessNotes"], checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      accessNotes: { ...prev.accessNotes, [note]: checked }
    }));
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.fromAddress.trim()) { newErrors.fromAddress = "Pickup address is required"; isValid = false; }
      if (!formData.toAddress.trim()) { newErrors.toAddress = "Drop-off address is required"; isValid = false; }
      if (!formData.moveDate) { newErrors.moveDate = "Preferred date is required"; isValid = false; }
      if (!formData.moveTime) { newErrors.moveTime = "Please select a preferred time"; isValid = false; }
    } else if (currentStep === 2) {
      if (!formData.bedrooms) { newErrors.bedrooms = "Please select size of move"; isValid = false; }
      if (!formData.truckSize) { newErrors.truckSize = "Please estimate truck size"; isValid = false; }
    } else if (currentStep === 3) {
      if (!formData.firstName.trim()) { newErrors.firstName = "First name required"; isValid = false; }
      if (!formData.lastName.trim()) { newErrors.lastName = "Last name required"; isValid = false; }
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = "Valid email required"; isValid = false; }
      if (!formData.phone.trim()) { newErrors.phone = "Phone number required"; isValid = false; }
      if (!formData.termsAgreed) { newErrors.termsAgreed = "You must agree to the terms"; isValid = false; }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    if (validateStep(3)) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setStep(4);
    }
  };

  const pageTransition = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3 }
  };

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col font-sans pb-20">
      {/* Simple Header for Form Flow */}
      <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:bg-primary/90 transition-colors">
              <Truck className="h-5 w-5" />
            </div>
            <span className="font-bold text-foreground tracking-tight hidden sm:block">Moving Easy</span>
          </Link>
          <div className="text-sm font-medium text-muted-foreground flex items-center">
            <Info className="w-4 h-4 mr-1" /> Secure Quote Request
          </div>
        </div>
      </header>

      <main className="flex-grow pt-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          
          {step < 4 && (
            <div className="mb-10 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Get Quotes from Local Movers</h1>
              <p className="text-muted-foreground">Fill out the details below to receive competitive quotes.</p>
            </div>
          )}

          {step < 4 && (
            <StepIndicator 
              currentStep={step} 
              totalSteps={3} 
              labels={["Route", "Items", "Contact"]} 
            />
          )}

          <Card className="shadow-lg border-border/60 rounded-2xl overflow-hidden bg-background">
            <CardContent className="p-0">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Route & Dates */}
                {step === 1 && (
                  <motion.div key="step1" {...pageTransition} className="p-6 md:p-8">
                    <h2 className="text-xl font-bold mb-6 flex items-center pb-4 border-b">
                      <MapPin className="mr-2 text-primary h-5 w-5" /> Move Details
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="from" className="font-semibold">Moving From</Label>
                          <Input 
                            id="from" 
                            placeholder="Pickup address, suburb or city" 
                            className={`h-12 bg-muted/30 ${errors.fromAddress ? 'border-destructive ring-destructive' : ''}`}
                            value={formData.fromAddress}
                            onChange={(e) => updateField('fromAddress', e.target.value)}
                          />
                          {errors.fromAddress && <p className="text-destructive text-xs">{errors.fromAddress}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="to" className="font-semibold">Moving To</Label>
                          <Input 
                            id="to" 
                            placeholder="Drop-off address, suburb or city" 
                            className={`h-12 bg-muted/30 ${errors.toAddress ? 'border-destructive ring-destructive' : ''}`}
                            value={formData.toAddress}
                            onChange={(e) => updateField('toAddress', e.target.value)}
                          />
                          {errors.toAddress && <p className="text-destructive text-xs">{errors.toAddress}</p>}
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="date" className="font-semibold">Preferred Date</Label>
                          <Input 
                            id="date" 
                            type="date" 
                            className={`h-12 bg-muted/30 ${errors.moveDate ? 'border-destructive ring-destructive' : ''}`}
                            value={formData.moveDate}
                            onChange={(e) => updateField('moveDate', e.target.value)}
                          />
                          {errors.moveDate && <p className="text-destructive text-xs">{errors.moveDate}</p>}
                          <p className="text-xs text-muted-foreground mt-1">Flexible date? Note it in step 2.</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time" className="font-semibold">Preferred Time</Label>
                          <Select value={formData.moveTime} onValueChange={(val) => updateField('moveTime', val)}>
                            <SelectTrigger id="time" className={`h-12 bg-muted/30 ${errors.moveTime ? 'border-destructive ring-destructive' : ''}`}>
                              <SelectValue placeholder="Select a time window" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                              <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.moveTime && <p className="text-destructive text-xs">{errors.moveTime}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t flex justify-end">
                      <Button onClick={handleNext} className="h-12 px-8 w-full md:w-auto font-semibold text-base shadow-sm group">
                        Next Step <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Items & Access */}
                {step === 2 && (
                  <motion.div key="step2" {...pageTransition} className="p-6 md:p-8">
                    <h2 className="text-xl font-bold mb-6 flex items-center pb-4 border-b">
                      <Package className="mr-2 text-primary h-5 w-5" /> What You're Moving
                    </h2>

                    <div className="space-y-8">
                      <div className="space-y-3">
                        <Label className="font-semibold text-base">Size of the move</Label>
                        <Select value={formData.bedrooms} onValueChange={(val) => updateField('bedrooms', val)}>
                          <SelectTrigger className={`h-12 bg-muted/30 ${errors.bedrooms ? 'border-destructive ring-destructive' : ''}`}>
                            <SelectValue placeholder="Select home size..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="few_items">Just a few items / TradeMe pickup</SelectItem>
                            <SelectItem value="studio">Studio / 1 Bedroom Apartment</SelectItem>
                            <SelectItem value="2_bed">2 Bedroom Home</SelectItem>
                            <SelectItem value="3_bed">3 Bedroom Home</SelectItem>
                            <SelectItem value="4_plus_bed">4+ Bedroom Home</SelectItem>
                            <SelectItem value="office">Office / Commercial</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.bedrooms && <p className="text-destructive text-xs">{errors.bedrooms}</p>}
                      </div>

                      <div className="space-y-3">
                        <Label className="font-semibold text-base">Estimated Truck Size Needed</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            { id: "van", label: "Small Van", desc: "1-2 items", icon: <Truck className="h-5 w-5" /> },
                            { id: "medium", label: "Medium Truck", desc: "1-2 Bedrooms", icon: <Truck className="h-6 w-6" /> },
                            { id: "large", label: "Large Truck", desc: "3-4 Bedrooms", icon: <Truck className="h-7 w-7" /> },
                            { id: "unsure", label: "Not Sure", desc: "Let the driver advise", icon: <Info className="h-5 w-5" /> }
                          ].map((truck) => (
                            <label 
                              key={truck.id} 
                              className={`
                                flex items-center p-4 border rounded-xl cursor-pointer transition-all hover:bg-muted/50
                                ${formData.truckSize === truck.id ? 'border-primary bg-primary/5 shadow-sm' : 'border-border'}
                              `}
                            >
                              <input 
                                type="radio" 
                                name="truckSize" 
                                value={truck.id} 
                                checked={formData.truckSize === truck.id}
                                onChange={(e) => updateField('truckSize', e.target.value)}
                                className="hidden" 
                              />
                              <div className={`mr-4 ${formData.truckSize === truck.id ? 'text-primary' : 'text-muted-foreground'}`}>
                                {truck.icon}
                              </div>
                              <div>
                                <p className="font-semibold">{truck.label}</p>
                                <p className="text-xs text-muted-foreground">{truck.desc}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.truckSize && <p className="text-destructive text-xs">{errors.truckSize}</p>}
                      </div>

                      <div className="space-y-3">
                        <Label className="font-semibold text-base">Access & Special Requirements</Label>
                        <p className="text-sm text-muted-foreground mb-3">Check all that apply to ensure accurate quoting.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <Checkbox 
                              checked={formData.accessNotes.stairsPickup} 
                              onCheckedChange={(checked) => updateAccessNote('stairsPickup', checked as boolean)} 
                            />
                            <span className="text-sm font-medium">Stairs at Pickup</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <Checkbox 
                              checked={formData.accessNotes.stairsDropoff} 
                              onCheckedChange={(checked) => updateAccessNote('stairsDropoff', checked as boolean)} 
                            />
                            <span className="text-sm font-medium">Stairs at Drop-off</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <Checkbox 
                              checked={formData.accessNotes.elevator} 
                              onCheckedChange={(checked) => updateAccessNote('elevator', checked as boolean)} 
                            />
                            <span className="text-sm font-medium">Elevator Available</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <Checkbox 
                              checked={formData.accessNotes.longCarry} 
                              onCheckedChange={(checked) => updateAccessNote('longCarry', checked as boolean)} 
                            />
                            <span className="text-sm font-medium">Long carry (&gt;20m walk)</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <Checkbox 
                              checked={formData.accessNotes.heavyItems} 
                              onCheckedChange={(checked) => updateAccessNote('heavyItems', checked as boolean)} 
                            />
                            <span className="text-sm font-medium">Piano / Very heavy items</span>
                          </label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="details" className="font-semibold">Additional Details (Optional)</Label>
                        <Textarea 
                          id="details" 
                          placeholder="List key large items, special instructions, or date flexibility..." 
                          className="min-h-[100px] bg-muted/30"
                          value={formData.details}
                          onChange={(e) => updateField('details', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t flex flex-col-reverse sm:flex-row justify-between gap-4">
                      <Button variant="outline" onClick={handleBack} className="h-12 px-6">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                      </Button>
                      <Button onClick={handleNext} className="h-12 px-8 font-semibold shadow-sm group">
                        Next Step <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Contact Details */}
                {step === 3 && (
                  <motion.div key="step3" {...pageTransition} className="p-6 md:p-8">
                    <h2 className="text-xl font-bold mb-6 flex items-center pb-4 border-b">
                      <User className="mr-2 text-primary h-5 w-5" /> Your Details
                    </h2>

                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="font-semibold">First Name</Label>
                          <Input 
                            id="firstName" 
                            className={`h-12 bg-muted/30 ${errors.firstName ? 'border-destructive ring-destructive' : ''}`}
                            value={formData.firstName}
                            onChange={(e) => updateField('firstName', e.target.value)}
                          />
                          {errors.firstName && <p className="text-destructive text-xs">{errors.firstName}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="font-semibold">Last Name</Label>
                          <Input 
                            id="lastName" 
                            className={`h-12 bg-muted/30 ${errors.lastName ? 'border-destructive ring-destructive' : ''}`}
                            value={formData.lastName}
                            onChange={(e) => updateField('lastName', e.target.value)}
                          />
                          {errors.lastName && <p className="text-destructive text-xs">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2 relative">
                          <Label htmlFor="email" className="font-semibold">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="For receiving quotes"
                              className={`pl-10 h-12 bg-muted/30 ${errors.email ? 'border-destructive ring-destructive' : ''}`}
                              value={formData.email}
                              onChange={(e) => updateField('email', e.target.value)}
                            />
                          </div>
                          {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                        </div>
                        <div className="space-y-2 relative">
                          <Label htmlFor="phone" className="font-semibold">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input 
                              id="phone" 
                              type="tel"
                              placeholder="For driver confirmation" 
                              className={`pl-10 h-12 bg-muted/30 ${errors.phone ? 'border-destructive ring-destructive' : ''}`}
                              value={formData.phone}
                              onChange={(e) => updateField('phone', e.target.value)}
                            />
                          </div>
                          {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="source" className="font-semibold">How did you hear about us? (Optional)</Label>
                        <Select value={formData.source} onValueChange={(val) => updateField('source', val)}>
                          <SelectTrigger id="source" className="h-12 bg-muted/30">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="facebook">Facebook / Instagram</SelectItem>
                            <SelectItem value="friend">Friend / Family</SelectItem>
                            <SelectItem value="returning">Repeat Customer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 mt-6">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <Checkbox 
                            checked={formData.termsAgreed} 
                            onCheckedChange={(checked) => updateField('termsAgreed', checked as boolean)} 
                            className="mt-1"
                          />
                          <div className="space-y-1">
                            <span className="text-sm font-medium">I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a></span>
                            <p className="text-xs text-muted-foreground">We only share your contact details with drivers when you accept their quote.</p>
                          </div>
                        </label>
                        {errors.termsAgreed && <p className="text-destructive text-xs mt-2 ml-7">{errors.termsAgreed}</p>}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t flex flex-col-reverse sm:flex-row justify-between gap-4">
                      <Button variant="outline" onClick={handleBack} className="h-12 px-6" disabled={isSubmitting}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                      </Button>
                      <Button 
                        onClick={handleSubmit} 
                        className="h-12 px-8 font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base shadow-md group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                        {!isSubmitting && <CheckCircle className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Confirmation */}
                {step === 4 && (
                  <motion.div key="step4" {...pageTransition} className="p-8 md:p-12 text-center flex flex-col items-center">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Request Submitted!</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-md">
                      Thanks {formData.firstName}. We've sent your move details to local verified operators.
                    </p>

                    <div className="w-full text-left bg-muted/30 border rounded-2xl p-6 mb-8">
                      <h3 className="font-semibold text-lg border-b pb-3 mb-4">Request Summary</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                          <span className="text-muted-foreground block mb-1">Route</span>
                          <span className="font-medium">{formData.fromAddress} <ArrowRight className="inline h-3 w-3 mx-1"/> {formData.toAddress}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground block mb-1">Date</span>
                          <span className="font-medium">{formData.moveDate ? format(new Date(formData.moveDate), 'PPP') : 'Not specified'}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground block mb-1">Size</span>
                          <span className="font-medium capitalize">{formData.bedrooms.replace('_', ' ')}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground block mb-1">Contact Email</span>
                          <span className="font-medium">{formData.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full max-w-md bg-blue-50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-200 border border-blue-100 dark:border-blue-900/30 rounded-xl p-5 mb-10 text-left flex gap-4">
                      <Info className="h-6 w-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold mb-1">What happens next?</h4>
                        <ul className="text-sm space-y-2 list-disc pl-4 opacity-90">
                          <li>Drivers will review your request and price it up.</li>
                          <li>You'll get an email alert for every new quote (usually within hours).</li>
                          <li>Log in via the link in the email to compare prices and reviews.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <Link href="/">
                        <Button variant="outline" className="h-12 px-8 w-full sm:w-auto">
                          Back to Home
                        </Button>
                      </Link>
                      <Button className="h-12 px-8 w-full sm:w-auto font-semibold shadow-sm">
                        View My Dashboard
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Trust indicators under form */}
          {step < 4 && (
            <div className="mt-8 flex justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> Privacy Protected
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" /> Free & No Obligation
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
