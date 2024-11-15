"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Heart, Mail, Star } from 'lucide-react'
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function SearchPage() {
  const router = useRouter()

  const handleMessageClick = (id) => {
    router.push(`/messages/${id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-4">
          {/* Filters Sidebar */}
          <Card className="md:col-span-1 bg-white/90 backdrop-blur-md shadow-xl">
            <CardHeader>
              <CardTitle className="text-purple-700">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-pink-600">Age Range</Label>
                <div className="flex items-center space-x-2">
                  <Input type="number" placeholder="From" className="w-20 border-purple-300 focus:border-pink-500" />
                  <span className="text-purple-700">to</span>
                  <Input type="number" placeholder="To" className="w-20 border-purple-300 focus:border-pink-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-pink-600">Height</Label>
                <select className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500">
                  <option value="">Any</option>
                  <option value="5.0">5'0" - 5'4"</option>
                  <option value="5.4">5'4" - 5'8"</option>
                  <option value="5.8">5'8" - 6'0"</option>
                  <option value="6.0">6'0" & above</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label className="text-pink-600">Religion</Label>
                <select className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500">
                  <option value="">Any</option>
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
              <div className="space-y-2">
                <Label className="text-pink-600">Mother Tongue</Label>
                <select className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500">
                  <option value="">Any</option>
                  <option value="hindi">Hindi</option>
                  <option value="marathi">Marathi</option>
                  <option value="gujarati">Gujarati</option>
                  <option value="punjabi">Punjabi</option>
                  <option value="bengali">Bengali</option>
                  <option value="tamil">Tamil</option>
                  <option value="telugu">Telugu</option>
                  <option value="kannada">Kannada</option>
                  <option value="malayalam">Malayalam</option>
                  <option value="odia">Odia</option>
                  <option value="assamese">Assamese</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label className="text-pink-600">Education</Label>
                <select className="w-full rounded-md border border-purple-300 p-2 focus:border-pink-500">
                  <option value="">Any</option>
                  <option value="high-school">High School</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD/Doctorate</option>
                  <option value="professional">Professional Degree (MD/CA/CS)</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">Apply Filters</Button>
            </CardContent>
          </Card>

          {/* Search Results */}
          <div className="md:col-span-3">
            <div className="grid gap-4">
              {searchResults.map((profile, index) => (
                <Card key={profile.id} className="overflow-hidden bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-4">
                      <div className="relative">
                        <img
                          alt={profile.name}
                          className="h-full w-full object-cover"
                          height="200"
                          src="/profile.webp"
                          width="200"
                        />
                        {profile.premium && (
                          <span className="absolute left-2 top-2 inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-2 py-1 text-xs font-semibold text-white">
                            <Star className="mr-1 h-3 w-3" />
                            Premium
                          </span>
                        )}
                      </div>
                      <div className="p-6 md:col-span-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-purple-800">{profile.name}</h3>
                            <p className="text-sm text-pink-600">Profile ID: {profile.id}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-100">
                              <Heart className="mr-2 h-4 w-4" />
                              Interest
                            </Button>
                            <Button 
                              size="sm" 
                              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                              onClick={() => handleMessageClick('MSG123')} // Using dummy message ID
                            >
                              <Mail className="mr-2 h-4 w-4" />
                              Message
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          {Object.entries(profile.details).map(([key, value]) => (
                            <div key={key}>
                              <dt className="text-sm font-medium text-pink-600">{key}</dt>
                              <dd className="text-sm font-semibold text-purple-800">{value}</dd>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <Link
                            href={`/profile/${profile.id}`}
                            className="text-sm font-medium text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            View Full Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const searchResults = [
  {
    id: "PBH123456",
    name: "Priya S.",
    premium: true,
    details: {
      Age: "27 years",
      Height: "5'6\"",
      Religion: "Hindu",
      "Mother Tongue": "Hindi",
      Location: "Mumbai",
      Education: "Masters in Computer Science",
      Occupation: "Software Engineer",
    },
  },
  {
    id: "PBH123457",
    name: "Neha R.",
    premium: false,
    details: {
      Age: "25 years",
      Height: "5'4\"",
      Religion: "Hindu",
      "Mother Tongue": "Marathi",
      Location: "Pune",
      Education: "B.Tech",
      Occupation: "Data Analyst",
    },
  },
  {
    id: "PBH123458",
    name: "Anjali M.",
    premium: true,
    details: {
      Age: "29 years",
      Height: "5'5\"",
      Religion: "Hindu",
      "Mother Tongue": "Gujarati",
      Location: "Ahmedabad",
      Education: "MBA",
      Occupation: "Marketing Manager",
    },
  },
]