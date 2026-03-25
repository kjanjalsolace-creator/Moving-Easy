import { useMemo, useState, type FormEvent } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type BookingFormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  movingDate: string;
  movingFrom: string;
  movingTo: string;
  moveType: "House" | "Appartment" | "Office" | "Freight" | "";
  message: string;
};

const INITIAL: BookingFormData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  movingDate: "",
  movingFrom: "",
  movingTo: "",
  moveType: "",
  message: "",
};

export default function BookingPage() {
  const [form, setForm] = useState<BookingFormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.phoneNumber.trim() &&
      form.email.trim() &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.movingDate &&
      form.movingFrom.trim() &&
      form.movingTo.trim() &&
      form.moveType
    );
  }, [form]);

  const update = <K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isValid) return;

    // Placeholder submit behavior (no backend wired yet)
    setTimeout(() => {
      setForm(INITIAL);
      setSubmitted(false);
      alert("Booking submitted.");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Make your booking</h1>
            <p className="mt-3 text-muted-foreground text-lg">
              Fill out the form below and our team will get back to you.
            </p>
          </div>

          <Card className="shadow-lg border-border/60 rounded-2xl overflow-hidden bg-background">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <Label className="font-semibold">Name</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm text-muted-foreground">
                        First
                      </Label>
                      <Input
                        id="firstName"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        className={`h-12 bg-muted/30 ${submitted && !form.firstName.trim() ? "border-destructive" : ""}`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm text-muted-foreground">
                        Last
                      </Label>
                      <Input
                        id="lastName"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        className={`h-12 bg-muted/30 ${submitted && !form.lastName.trim() ? "border-destructive" : ""}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={form.phoneNumber}
                      onChange={(e) => update("phoneNumber", e.target.value)}
                      className={`h-12 bg-muted/30 ${submitted && !form.phoneNumber.trim() ? "border-destructive" : ""}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={`h-12 bg-muted/30 ${
                        submitted && (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) ? "border-destructive" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="movingDate" className="font-semibold">
                    Moving Date
                  </Label>
                  <Input
                    id="movingDate"
                    type="date"
                    value={form.movingDate}
                    onChange={(e) => update("movingDate", e.target.value)}
                    className={`h-12 bg-muted/30 ${submitted && !form.movingDate ? "border-destructive" : ""}`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="movingFrom" className="font-semibold">
                      Moving From
                    </Label>
                    <Input
                      id="movingFrom"
                      value={form.movingFrom}
                      onChange={(e) => update("movingFrom", e.target.value)}
                      className={`h-12 bg-muted/30 ${submitted && !form.movingFrom.trim() ? "border-destructive" : ""}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="movingTo" className="font-semibold">
                      Moving To
                    </Label>
                    <Input
                      id="movingTo"
                      value={form.movingTo}
                      onChange={(e) => update("movingTo", e.target.value)}
                      className={`h-12 bg-muted/30 ${submitted && !form.movingTo.trim() ? "border-destructive" : ""}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Type of Move</Label>
                  <Select value={form.moveType} onValueChange={(val) => update("moveType", val as BookingFormData["moveType"])}>
                    <SelectTrigger className={`h-12 bg-muted/30 ${submitted && !form.moveType ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="House">House</SelectItem>
                      <SelectItem value="Appartment">Appartment</SelectItem>
                      <SelectItem value="Office">Office</SelectItem>
                      <SelectItem value="Freight">Freight</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold">
                    Comment or Message
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="min-h-[120px] bg-muted/30"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="h-12 px-8 w-full md:w-auto bg-black hover:bg-black/90 text-white font-semibold">
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

