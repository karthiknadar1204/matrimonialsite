"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Mail, Phone, Shield, Star } from 'lucide-react'
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter()

  const handleMessageClick = () => {
    router.push('/messages/MSG123') // Using dummy message ID
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Left Sidebar */}
          <Card className="md:col-span-1 bg-white/90 backdrop-blur-md shadow-xl">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="relative mx-auto h-32 w-32">
                  <img
                    alt="Profile photo"
                    className="rounded-full object-cover border-4 border-purple-300"
                    src="/profile.webp"
                  />
                  <span className="absolute bottom-0 right-0 inline-flex items-center justify-center rounded-full bg-green-500 p-2">
                    <Shield className="h-4 w-4 text-white" />
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-purple-800">Priya S.</h2>
                <p className="text-sm text-pink-600">Profile ID: PBH123456</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                    <Heart className="mr-2 h-4 w-4" />
                    Interest
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-300 text-purple-700 hover:bg-purple-100"
                    onClick={handleMessageClick}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                </div>
                <Link href="/search" className="block mt-4">
                  <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-100">
                    Back to Search
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="about" className="space-y-4">
              <TabsList className="bg-white/70 backdrop-blur-sm">
                <TabsTrigger value="about" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">About</TabsTrigger>
                <TabsTrigger value="family" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Family</TabsTrigger>
                <TabsTrigger value="preferences" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Partner Preferences</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="space-y-4">
                <Card className="bg-white/90 backdrop-blur-md shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-purple-700">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {basicInfo.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <dt className="text-sm font-medium text-pink-600">{item.label}</dt>
                          <dd className="text-sm font-semibold text-purple-800">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-md shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-purple-700">Education & Career</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {careerInfo.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <dt className="text-sm font-medium text-pink-600">{item.label}</dt>
                          <dd className="text-sm font-semibold text-purple-800">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="family">
                <Card className="bg-white/90 backdrop-blur-md shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-purple-700">Family Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {familyInfo.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <dt className="text-sm font-medium text-pink-600">{item.label}</dt>
                          <dd className="text-sm font-semibold text-purple-800">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="preferences">
                <Card className="bg-white/90 backdrop-blur-md shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-purple-700">Partner Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {partnerPreferences.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <dt className="text-sm font-medium text-pink-600">{item.label}</dt>
                          <dd className="text-sm font-semibold text-purple-800">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

const basicInfo = [
  { label: "Age", value: "27 years" },
  { label: "Height", value: "5'6\"" },
  { label: "Marital Status", value: "Never Married" },
  { label: "Religion", value: "Hindu" },
  { label: "Location", value: "Mumbai, India" },
  { label: "Mother Tongue", value: "Hindi" },
]

const careerInfo = [
  { label: "Education", value: "Masters in Computer Science" },
  { label: "College", value: "University of Mumbai" },
  { label: "Profession", value: "Software Engineer" },
  { label: "Company", value: "Tech Solutions Inc." },
  { label: "Annual Income", value: "15-20 Lakhs" },
]

const familyInfo = [
  { label: "Father's Occupation", value: "Business" },
  { label: "Mother's Occupation", value: "Homemaker" },
  { label: "Brothers", value: "1 (Married)" },
  { label: "Sisters", value: "1 (Unmarried)" },
  { label: "Family Type", value: "Nuclear Family" },
  { label: "Family Values", value: "Moderate" },
]

const partnerPreferences = [
  { label: "Age", value: "27-32 years" },
  { label: "Height", value: "5'8\" - 6'2\"" },
  { label: "Education", value: "Masters or Bachelor's degree" },
  { label: "Profession", value: "Any" },
  { label: "Location", value: "Mumbai, Pune" },
  { label: "Annual Income", value: "Above 20 Lakhs" },
]