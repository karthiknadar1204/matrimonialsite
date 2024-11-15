"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleCompleteRegistration = () => {
    // TODO: Add actual registration logic here
    // For now, just navigate to a dummy profile ID
    router.push("/profile/1"); // Changed to redirect to profile/1
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 py-12">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-2xl bg-white/90 backdrop-blur-md shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-purple-700">
              Create Your Profile
            </CardTitle>
            <CardDescription className="text-pink-600">
              Step {step} of 4 - {stepTitles[step - 1]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="profile-for" className="text-purple-700">
                      Profile for
                    </Label>
                    <RadioGroup
                      defaultValue="self"
                      className="grid grid-cols-3 gap-4"
                    >
                      {["Self", "Son", "Daughter"].map((option) => (
                        <Label
                          key={option.toLowerCase()}
                          htmlFor={option.toLowerCase()}
                          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-purple-300 bg-white p-4 hover:bg-pink-100 hover:text-pink-900 [&:has([data-state=checked])]:border-purple-600 [&:has([data-state=checked])]:bg-purple-100"
                        >
                          <RadioGroupItem
                            value={option.toLowerCase()}
                            id={option.toLowerCase()}
                            className="sr-only"
                          />
                          {option}
                        </Label>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-purple-700">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-purple-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="text-purple-700">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                </div>
                <Button
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Continue
                </Button>
              </form>
            )}

            {step === 2 && (
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="dob" className="text-purple-700">
                      Date of Birth
                    </Label>
                    <Input
                      id="dob"
                      type="date"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="height" className="text-purple-700">
                      Height
                    </Label>
                    <select
                      id="height"
                      className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500"
                    >
                      <option value="">Select height</option>
                      <option value="4.10">4'10"</option>
                      <option value="4.11">4'11"</option>
                      <option value="5.0">5'0"</option>
                      <option value="5.1">5'1"</option>
                      <option value="5.2">5'2"</option>
                      <option value="5.3">5'3"</option>
                      <option value="5.4">5'4"</option>
                      <option value="5.5">5'5"</option>
                      <option value="5.6">5'6"</option>
                      <option value="5.7">5'7"</option>
                      <option value="5.8">5'8"</option>
                      <option value="5.9">5'9"</option>
                      <option value="5.10">5'10"</option>
                      <option value="5.11">5'11"</option>
                      <option value="6.0">6'0"</option>
                      <option value="6.1">6'1"</option>
                      <option value="6.2">6'2"</option>
                      <option value="6.3">6'3"</option>
                      <option value="6.4">6'4"</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="marital-status" className="text-purple-700">
                      Marital Status
                    </Label>
                    <select
                      id="marital-status"
                      className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500"
                    >
                      <option value="">Select marital status</option>
                      <option value="never-married">Never Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                      <option value="awaiting-divorce">Awaiting Divorce</option>
                      <option value="annulled">Annulled</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="religion" className="text-purple-700">
                      Religion
                    </Label>
                    <select
                      id="religion"
                      className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500"
                    >
                      <option value="">Select religion</option>
                      <option value="hindu">Hindu</option>
                      <option value="muslim">Muslim</option>
                      <option value="christian">Christian</option>
                      <option value="sikh">Sikh</option>
                      <option value="buddhist">Buddhist</option>
                      <option value="jain">Jain</option>
                      <option value="parsi">Parsi</option>
                      <option value="jewish">Jewish</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="mother-tongue" className="text-purple-700">
                      Mother Tongue
                    </Label>
                    <select
                      id="mother-tongue"
                      className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500"
                    >
                      <option value="">Select mother tongue</option>
                      <option value="hindi">Hindi</option>
                      <option value="english">English</option>
                      <option value="punjabi">Punjabi</option>
                      <option value="tamil">Tamil</option>
                      <option value="telugu">Telugu</option>
                      <option value="malayalam">Malayalam</option>
                      <option value="kannada">Kannada</option>
                      <option value="gujarati">Gujarati</option>
                      <option value="marathi">Marathi</option>
                      <option value="bengali">Bengali</option>
                      <option value="urdu">Urdu</option>
                      <option value="odia">Odia</option>
                      <option value="assamese">Assamese</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="w-full border-purple-300 text-purple-700 hover:bg-purple-100"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="education" className="text-purple-700">
                      Highest Education
                    </Label>
                    <select
                      id="education"
                      className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500"
                    >
                      <option value="">Select education</option>
                      <option value="high-school">High School</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD/Doctorate</option>
                      <option value="diploma">Diploma</option>
                      <option value="trade-school">Trade School</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="college" className="text-purple-700">
                      College/University
                    </Label>
                    <Input
                      id="college"
                      placeholder="Enter your college/university name"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="occupation" className="text-purple-700">
                      Occupation
                    </Label>
                    <select
                      id="occupation"
                      className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500"
                    >
                      <option value="">Select occupation</option>
                      <option value="software-engineer">
                        Software Engineer
                      </option>
                      <option value="doctor">Doctor</option>
                      <option value="teacher">Teacher</option>
                      <option value="business-owner">Business Owner</option>
                      <option value="banker">Banker</option>
                      <option value="lawyer">Lawyer</option>
                      <option value="accountant">Accountant</option>
                      <option value="government-employee">
                        Government Employee
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company" className="text-purple-700">
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Enter your company name"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="annual-income" className="text-purple-700">
                      Annual Income
                    </Label>
                    <select
                      id="annual-income"
                      className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500"
                    >
                      <option value="">Select income range</option>
                      <option value="0-5">Below 5 Lakhs</option>
                      <option value="5-10">5-10 Lakhs</option>
                      <option value="10-15">10-15 Lakhs</option>
                      <option value="15-20">15-20 Lakhs</option>
                      <option value="20-30">20-30 Lakhs</option>
                      <option value="30-50">30-50 Lakhs</option>
                      <option value="50+">Above 50 Lakhs</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="w-full border-purple-300 text-purple-700 hover:bg-purple-100"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(4)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            )}

            {step === 4 && (
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="father-occupation"
                      className="text-purple-700"
                    >
                      Father's Occupation
                    </Label>
                    <Input
                      id="father-occupation"
                      placeholder="Enter father's occupation"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="mother-occupation"
                      className="text-purple-700"
                    >
                      Mother's Occupation
                    </Label>
                    <Input
                      id="mother-occupation"
                      placeholder="Enter mother's occupation"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="siblings" className="text-purple-700">
                      Siblings
                    </Label>
                    <Input
                      id="siblings"
                      placeholder="e.g., 1 Brother (Married), 1 Sister (Unmarried)"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="family-type" className="text-purple-700">
                      Family Type
                    </Label>
                    <select
                      id="family-type"
                      className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500"
                    >
                      <option value="">Select family type</option>
                      <option value="nuclear">Nuclear Family</option>
                      <option value="joint">Joint Family</option>
                      <option value="extended">Extended Family</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="family-values" className="text-purple-700">
                      Family Values
                    </Label>
                    <select
                      id="family-values"
                      className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500"
                    >
                      <option value="">Select family values</option>
                      <option value="traditional">Traditional</option>
                      <option value="moderate">Moderate</option>
                      <option value="liberal">Liberal</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="about-me" className="text-purple-700">
                      About Me
                    </Label>
                    <Textarea
                      id="about-me"
                      placeholder="Tell us about yourself"
                      className="border-purple-300 focus:border-pink-500"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(3)}
                    className="w-full border-purple-300 text-purple-700 hover:bg-purple-100"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      handleCompleteRegistration();
                    }}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    Complete Registration
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const stepTitles = [
  "Basic Information",
  "Personal Details",
  "Professional Details",
  "Family & Lifestyle",
];
