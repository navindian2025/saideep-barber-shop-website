import Image from "next/image"
import { Scissors, Star, Clock, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/barbershop-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-pulse mb-6">
            <Scissors className="h-16 w-16 text-yellow-500 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            BROTHERS BARBER
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">Ambernagar's Premier Barbershop Experience</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="w-full h-[400px] relative rounded-lg overflow-hidden border-2 border-yellow-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brothers.jpg-S4dJmJrkYiTi2qU2dgcWBDOhZw7N9F.jpeg"
                  alt="The Brothers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden border-2 border-yellow-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PartnersTogetherSecondPhoto.jpg-N9yrnikNDM5Z7OJBVD1cB5KNtLU2k1.jpeg"
                  alt="The Brothers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-yellow-500">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Two brothers with a passion for styling have come together to create the ultimate barbershop experience
                in Ambernagar. With years of expertise and dedication to our craft, we've built a reputation for
                delivering consistent, high-quality service that meets the perfect requirements of our Telugu clientele.
              </p>
              <p className="text-gray-300 mb-8">
                Our commitment to excellence, attention to detail, and understanding of the latest trends has made us
                the go-to destination for those seeking premium grooming services in the region.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Premium Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scissors className="h-5 w-5 text-yellow-500" />
                  <span>Expert Stylists</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <span>Timely Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">Our Premium Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-yellow-500/50 overflow-hidden group">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MoustacheSettingExpertise.jpg-7Nb7Ylh22ijrGFKpBp2Fb93ubYUkUS.jpeg"
                  alt="Haircut and Styling"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-500">Haircut & Styling</h3>
                <p className="text-gray-400 mb-4">
                  Expert haircuts tailored to enhance your features and match your personality.
                </p>
                <p className="text-yellow-500 font-bold">₹250 - ₹500</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-yellow-500/50 overflow-hidden group">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CustomerwithBeard.jpg-mXZPOCAPFhkJTMDqVEmODHsLfMjMck.jpeg"
                  alt="Beard Grooming"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-500">Beard Grooming</h3>
                <p className="text-gray-400 mb-4">Precision beard trimming and styling to achieve the perfect look.</p>
                <p className="text-yellow-500 font-bold">₹150 - ₹300</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-yellow-500/50 overflow-hidden group">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HeadShaveService.jpg-cYWDEHSwae9vgaOlpzMSOkNJQIYfbK.jpeg"
                  alt="Head Shave"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-500">Head Shave</h3>
                <p className="text-gray-400 mb-4">Clean and comfortable head shaves with premium products.</p>
                <p className="text-yellow-500 font-bold">₹200</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Celebrity Styles Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">Tollywood Inspired Styles</h2>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((item) => (
                <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-zinc-800 border-yellow-500/30">
                      <div className="h-80 relative">
                        <Image
                          src={`/placeholder.svg?height=400&width=300&text=Tollywood+Style+${item}`}
                          alt={`Tollywood Style ${item}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold text-yellow-500">Celebrity Style {item}</h3>
                        <p className="text-sm text-gray-400">Inspired by top Tollywood actors</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-yellow-500 border-yellow-500" />
            <CarouselNext className="text-yellow-500 border-yellow-500" />
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-yellow-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "The best haircut experience in Ambernagar! The brothers really understand what style suits me. I
                  always leave looking my best."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Customer1Testimonial.jpg-g0LPuTjXd65hvVuFFcozcnBiTIcooh.jpeg"
                      alt="Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Ravi Kumar</h4>
                    <p className="text-sm text-gray-400">Regular Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-yellow-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Their beard grooming is exceptional. They take the time to understand what you want and deliver
                  exactly that. Highly recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CustomerwithBeard.jpg-mXZPOCAPFhkJTMDqVEmODHsLfMjMck.jpeg"
                      alt="Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Suresh Reddy</h4>
                    <p className="text-sm text-gray-400">Loyal Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-yellow-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "I've been going to Brothers Barber for years now. The consistency in their service is what keeps me
                  coming back. True professionals!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MoustacheSettingExpertise.jpg-7Nb7Ylh22ijrGFKpBp2Fb93ubYUkUS.jpeg"
                      alt="Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Venkat Rao</h4>
                    <p className="text-sm text-gray-400">5-Year Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-zinc-900 relative">
        <div className="absolute inset-0 bg-[url('/images/scissors-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-black p-8 rounded-xl border border-yellow-500/30">
            <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">Book Your Appointment</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:border-yellow-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:border-yellow-500 focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:border-yellow-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:border-yellow-500 focus:outline-none"
                  >
                    <option value="">Select a time</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:border-yellow-500 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="haircut">Haircut & Styling</option>
                  <option value="beard">Beard Grooming</option>
                  <option value="shave">Head Shave</option>
                  <option value="facial">Facial</option>
                  <option value="color">Hair Coloring</option>
                  <option value="package">Premium Package</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">
                  Special Requests
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:border-yellow-500 focus:outline-none"
                  placeholder="Any special requests or preferences..."
                ></textarea>
              </div>

              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3">Book Now</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-yellow-500">Find Us</h2>
              <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/30 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Our Location</h3>
                    <p className="text-gray-300">123 Main Street, Ambernagar</p>
                    <p className="text-gray-300">Hyderabad, Telangana 500001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <Clock className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Business Hours</h3>
                    <p className="text-gray-300">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Contact Us</h3>
                    <p className="text-gray-300">Phone: +91 98765 43210</p>
                    <p className="text-gray-300">Email: info@brothersbarber.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 h-[400px] rounded-lg overflow-hidden">
              {/* This would be a Google Map in a real implementation */}
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <p className="text-gray-300">Interactive Map Would Be Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-yellow-500">BROTHERS BARBER</h2>
              <p className="text-gray-400 mt-2">Crafting Style Since 2015</p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="font-bold mb-4 text-yellow-500">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      Book Now
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-yellow-500">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      Haircut & Styling
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      Beard Grooming
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      Head Shave
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      Hair Coloring
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
            <p className="text-gray-400">© 2025 Brothers Barber. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
