'use client'

import { useState, use } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, Send } from 'lucide-react'
import Link from "next/link"

export default function MessagesPage({ params }) {
  const unwrappedParams = use(params)
  const [messages, setMessages] = useState(sampleMessages)
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', content: newMessage, timestamp: new Date().toISOString() }])
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-8">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-2xl bg-white/90 backdrop-blur-md shadow-xl">
          <CardHeader className="border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Link href="/search" className="text-purple-700 hover:text-purple-900">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <CardTitle className="text-2xl font-bold text-purple-800">
                Chat with {unwrappedParams.id || 'Unknown User'}
              </CardTitle>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt={unwrappedParams.id} />
                <AvatarFallback>{unwrappedParams.id ? unwrappedParams.id[0] : 'U'}</AvatarFallback>
              </Avatar>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] p-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'} mb-4`}>
                  <div className={`max-w-[70%] rounded-lg p-3 ${message.sender === 'You' ? 'bg-purple-100 text-purple-900' : 'bg-pink-100 text-pink-900'}`}>
                    <p className="text-sm font-semibold mb-1">{message.sender}</p>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{new Date(message.timestamp).toLocaleTimeString()}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="border-t border-gray-200 p-4">
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-grow border-purple-300 focus:border-pink-500"
                />
                <Button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const sampleMessages = [
  {
    id: 1,
    sender: 'Priya',
    content: 'Hi there! I saw your profile and thought we might have a lot in common. How are you doing today?',
    timestamp: '2023-06-10T10:30:00Z'
  },
  {
    id: 2,
    sender: 'You',
    content: 'Hello Priya! Thanks for reaching out. I\'m doing well, thank you. I noticed we both enjoy traveling. What\'s your favorite place you\'ve visited so far?',
    timestamp: '2023-06-10T10:35:00Z'
  },
  {
    id: 3,
    sender: 'Priya',
    content: 'That\'s great! My favorite place so far has been Japan. The culture, food, and technology there are amazing. Have you ever been?',
    timestamp: '2023-06-10T10:40:00Z'
  },
  {
    id: 4,
    sender: 'You',
    content: 'I haven\'t been to Japan yet, but it\'s definitely on my bucket list! I\'ve heard so many great things about it. My favorite trip was to Italy - the history and cuisine were incredible.',
    timestamp: '2023-06-10T10:45:00Z'
  },
  {
    id: 5,
    sender: 'Priya',
    content: 'Italy sounds wonderful! I\'d love to visit someday. Maybe we could plan a trip together if things work out between us 😊 What do you like to do in your free time when you\'re not traveling?',
    timestamp: '2023-06-10T10:50:00Z'
  }
]