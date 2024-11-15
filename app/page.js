import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-pink-600">LoveMatch</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-purple-700 hover:text-purple-900 hover:underline">
              Login
            </Link>
            <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              <Link href="/register">Register Free</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/80 to-purple-300/80">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Happy couple"
            className="h-full w-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white drop-shadow-lg">
              Find Your Perfect Match
            </h1>
            <p className="mt-6 text-xl text-purple-900">
              Join millions of happy couples who found their soulmate through our trusted matchmaking service.
            </p>
          </div>

          {/* Search Form */}
          <Card className="mt-12 max-w-4xl mx-auto bg-white/90 backdrop-blur-md shadow-xl">
            <CardContent className="p-6">
              <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
                <select defaultValue="looking-for" className="border rounded-md p-2">
                  <option value="looking-for" disabled>Looking for</option>
                  <option value="bride">Bride</option>
                  <option value="groom">Groom</option>
                </select>
                <select defaultValue="age-from" className="border rounded-md p-2">
                  <option value="age-from" disabled>Age from</option>
                  {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
                <select defaultValue="age-to" className="border rounded-md p-2">
                  <option value="age-to" disabled>Age to</option>
                  {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
                <select defaultValue="religion" className="border rounded-md p-2">
                  <option value="religion" disabled>Religion</option>
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                  <option value="christian">Christian</option>
                  <option value="sikh">Sikh</option>
                  <option value="other">Other</option>
                </select>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" size="lg">
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-800">Why Choose Us</h2>
            <p className="mt-4 text-pink-700">
              Discover what makes us the most trusted matrimonial service
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-purple-700">{feature.title}</CardTitle>
                  <CardDescription className="text-pink-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-24 bg-gradient-to-r from-pink-200 to-purple-200">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-purple-800">Premium Matchmaking Service</h2>
              <p className="text-pink-700">
                Get personalized assistance from our expert matchmakers to find your perfect life partner.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Upgrade to Premium
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {premiumFeatures.map((feature, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-700">{feature.title}</CardTitle>
                    <CardDescription className="text-pink-600">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Verified Profiles",
    description: "All profiles are manually verified to ensure authenticity",
  },
  {
    title: "Privacy Control", 
    description: "You decide who can view your profile and contact you",
  },
  {
    title: "Smart Matching",
    description: "Our algorithm suggests matches based on your preferences",
  },
  {
    title: "Success Stories",
    description: "Thousands of happy couples found their soulmate here",
  },
  {
    title: "Expert Support",
    description: "24/7 customer support to help you find your perfect match",
  },
  {
    title: "Secure Platform",
    description: "Your data is protected with enterprise-grade security",
  },
]

const premiumFeatures = [
  {
    title: "Personal Matchmaker",
    description: "Get matched by our experienced matchmaking experts",
  },
  {
    title: "Priority Support",
    description: "24/7 priority customer support",
  },
  {
    title: "Advanced Filters",
    description: "Access to advanced search filters and preferences",
  },
  {
    title: "Profile Highlight",
    description: "Your profile gets highlighted in search results",
  },
]