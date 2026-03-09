"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { MapPin, Building2, Home, Calendar, Mail, Star, Images } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeLargeTitles"
      background="fluid"
      cardStyle="outline"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Hostel 26"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Rooms", id: "rooms" },
            { name: "Reviews", id: "reviews" },
            { name: "Location", id: "location" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Your Stay", href: "#booking" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Hostel 26 – Comfortable Stay in Košice"
          description="Affordable and clean accommodation near the city center with helpful staff and convenient access to historical attractions."
          background={{ variant: "sparkles-gradient" }}
          tag="Welcome to Košice"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          buttons={[
            { text: "Book Your Stay", href: "#booking" },
            { text: "View Rooms", href: "#rooms" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_74190-6245.jpg?_wi=1", imageAlt: "Hostel 26 bedroom" },
            { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-working-with-her-laptop-bed_23-2147601448.jpg?_wi=1", imageAlt: "Private room accommodation" },
            { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/double-bed-with-four-pillows_1203-1107.jpg?_wi=1", imageAlt: "Double room comfort" },
            { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/friends-using-laptop-tablet-bed_23-2147766785.jpg?_wi=1", imageAlt: "Shared hostel style room" },
            { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-waking-up-morning_1153-3553.jpg?_wi=1", imageAlt: "Modern hostel interior" },
            { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/colleagues-talking-learning-study-session_23-2149285455.jpg?_wi=1", imageAlt: "Common area lounge" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          ariaLabel="Hostel 26 hero section"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About Hostel 26"
          tagIcon={Building2}
          tagAnimation="slide-up"
          title="Hostel 26 is a comfortable and affordable accommodation located at Tolstého 22 in Košice, Slovakia. We offer clean rooms and a convenient location for visitors who want to explore the city. Guests appreciate our helpful staff, excellent value for money, and proximity to the historical center of Košice. Perfect for tourists, travelers, and visitors seeking practical, welcoming accommodation."
          useInvertedBackground={false}
          buttons={[
            { text: "Learn More", href: "#location" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Our Rooms"
          description="Choose from a variety of comfortable room types to suit your needs and budget. Each room is clean, well-maintained, and designed for a pleasant stay."
          tag="Accommodations"
          tagIcon={Home}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            { id: "1", name: "Private Room", price: "Contact for rates", imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-working-with-her-laptop-bed_23-2147601448.jpg?_wi=2", imageAlt: "Private room with bed" },
            { id: "2", name: "Double Room", price: "Contact for rates", imageSrc: "http://img.b2bpic.net/free-photo/double-bed-with-four-pillows_1203-1107.jpg?_wi=2", imageAlt: "Double room accommodation" },
            { id: "3", name: "Shared Room", price: "Contact for rates", imageSrc: "http://img.b2bpic.net/free-photo/friends-using-laptop-tablet-bed_23-2147766785.jpg?_wi=2", imageAlt: "Shared hostel style room" }
          ]}
        />
      </div>

      <div id="booking" data-section="booking">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          tagAnimation="slide-up"
          title="Book Your Stay"
          description="Select your preferred dates and room type to check availability. Contact us for current pricing and special offers."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/pillow-bed_74190-6245.jpg?_wi=2"
          imageAlt="Booking reservation calendar"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Check Availability"
          termsText="We'll contact you shortly with available dates and pricing information."
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardFifteen
          testimonial="Hostel 26 offers great accommodation when the city center is full. The staff helped us even late at night with our special requests. Clean rooms, friendly atmosphere, and excellent value for money make it our top recommendation."
          rating={5}
          author="Roman Varga, Košice"
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg", alt: "Roman Varga" },
            { src: "http://img.b2bpic.net/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg", alt: "Nikolas Kubík" },
            { src: "http://img.b2bpic.net/free-photo/man-green-shirt-smiling-confident_23-2148401382.jpg", alt: "Ján Boleček" },
            { src: "http://img.b2bpic.net/free-photo/purposeful-young-businessman-looking-away_1262-3609.jpg", alt: "Guest testimonial" }
          ]}
        />
      </div>

      <div id="reviews-detail" data-section="reviews-detail">
        <SocialProofOne
          title="Trusted by Travelers"
          description="Based on 87 reviews with an average rating of 4.3 out of 5 stars"
          tag="Guest Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Beautiful hostel with clean and well-equipped rooms",            "About 10-15 minutes walking from the main square",            "Flexibility and helpfulness of the reception staff",            "Great location and convenient public transportation access",            "Friendly atmosphere and welcoming environment",            "Excellent value for money and comfort",            "Professional and responsive management team",            "Perfect for travelers exploring Košice"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="location" data-section="location">
        <FeatureCardTwelve
          title="Location & Accessibility"
          description="Hostel 26 is strategically located in Košice with convenient access to public transportation, local attractions, and the historic city center. Our central position makes exploring the city easy and enjoyable."
          tag="Explore Košice"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "address",              label: "Address",              title: "Tolstého 22, 040 01 Košice, Slovakia",              items: [
                "Walking distance to city center",                "Near public transport hub",                "Close to restaurants and cafes",                "Access to tourist attractions"
              ]
            },
            {
              id: "attractions",              label: "Nearby",              title: "Explore Historic Košice",              items: [
                "Historic St. Elisabeth Cathedral",                "Main Square with theaters",                "Botanical gardens nearby",                "Museums and galleries",                "Shopping and dining options"
              ]
            }
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <BlogCardOne
          title="Photo Gallery"
          description="Take a visual tour of Hostel 26 and discover our comfortable rooms, welcoming common areas, and beautiful Košice location."
          tag="Gallery"
          tagIcon={Images}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",              category: "Rooms",              title: "Comfortable Bedrooms",              excerpt: "Our clean and well-maintained private and shared rooms provide a comfortable retreat after exploring the city.",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-waking-up-morning_1153-3553.jpg?_wi=2",              imageAlt: "Hostel bedroom",              authorName: "Hostel 26",              authorAvatar: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg",              date: "2025"
            },
            {
              id: "2",              category: "Rooms",              title: "Modern Amenities",              excerpt: "Each room features modern furnishings and quality bedding to ensure a restful night's sleep.",              imageSrc: "http://img.b2bpic.net/free-photo/white-comfortable-pillow-decoration-interior-bedroom_74190-11125.jpg",              imageAlt: "Modern hostel room",              authorName: "Hostel 26",              authorAvatar: "http://img.b2bpic.net/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg",              date: "2025"
            },
            {
              id: "3",              category: "Exterior",              title: "Welcoming Entrance",              excerpt: "Our distinctive exterior marks a warm welcome to travelers visiting Košice.",              imageSrc: "http://img.b2bpic.net/free-photo/city-building_23-2148107104.jpg",              imageAlt: "Hostel exterior",              authorName: "Hostel 26",              authorAvatar: "http://img.b2bpic.net/free-photo/man-green-shirt-smiling-confident_23-2148401382.jpg",              date: "2025"
            },
            {
              id: "4",              category: "Common Areas",              title: "Social Spaces",              excerpt: "Relax and meet fellow travelers in our comfortable common areas and lounge.",              imageSrc: "http://img.b2bpic.net/free-photo/colleagues-talking-learning-study-session_23-2149285455.jpg?_wi=2",              imageAlt: "Common area lounge",              authorName: "Hostel 26",              authorAvatar: "http://img.b2bpic.net/free-photo/purposeful-young-businessman-looking-away_1262-3609.jpg",              date: "2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Contact Hostel 26"
          description="Have questions about booking? Need special accommodations? Our friendly team is here to help. Send us a message and we'll respond promptly."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/pillow-bed_74190-6245.jpg?_wi=3"
          imageAlt="Contact our team"
          mediaAnimation="slide-up"
          mediaPosition="left"
          inputPlaceholder="your.name@email.com"
          buttonText="Send Message"
          termsText="Phone: +421 910 122 556 | Check-in: 14:00 | We'll respond within 24 hours."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Navigation",              items: [
                { label: "Home", href: "#hero" },
                { label: "Rooms", href: "#rooms" },
                { label: "Reviews", href: "#reviews" },
                { label: "Location", href: "#location" }
              ]
            },
            {
              title: "Quick Links",              items: [
                { label: "Book Now", href: "#booking" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
                { label: "Pricing", href: "#" }
              ]
            },
            {
              title: "Info",              items: [
                { label: "Tolstého 22, Košice", href: "#location" },
                { label: "+421 910 122 556", href: "tel:+421910122556" },
                { label: "Check-in: 14:00", href: "#" },
                { label: "Policies", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Cancellation Policy", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Hostel 26 Košice. All rights reserved."
          bottomRightText="Made for comfortable travels"
        />
      </div>
    </ThemeProvider>
  );
}
