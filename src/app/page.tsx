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
            { name: "Domov", id: "hero" },
            { name: "Izby", id: "rooms" },
            { name: "Recenzie", id: "reviews" },
            { name: "Poloha", id: "location" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{ text: "Rezervovať pobyt", href: "#booking" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Hostel 26 – Pohodlný pobyt v Košiciach"
          description="Cenovo dostupné a čisté ubytovanie neďaleko centra mesta s ochotným personálom a pohodlným prístupom k historickým pamätkam."
          background={{ variant: "sparkles-gradient" }}
          tag="Vitajte v Košiciach"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          buttons={[
            { text: "Rezervovať pobyt", href: "#booking" },
            { text: "Pozrieť izby", href: "#rooms" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_74190-6245.jpg?_wi=1", imageAlt: "Spálňa Hostelu 26" },
            { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-working-with-her-laptop-bed_23-2147601448.jpg?_wi=1", imageAlt: "Súkromná izba" },
            { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/double-bed-with-four-pillows_1203-1107.jpg?_wi=1", imageAlt: "Dvojlôžková izba" },
            { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/friends-using-laptop-tablet-bed_23-2147766785.jpg?_wi=1", imageAlt: "Spoločná izba v hostelskom štýle" },
            { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-waking-up-morning_1153-3553.jpg?_wi=1", imageAlt: "Moderný interiér hostelu" },
            { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/colleagues-talking-learning-study-session_23-2149285455.jpg?_wi=1", imageAlt: "Spoločná zóna" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          ariaLabel="Hostel 26 hero sekcia"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="O Hosteli 26"
          tagIcon={Building2}
          tagAnimation="slide-up"
          title="Hostel 26 je pohodlné a cenovo dostupné ubytovanie nachádzajúce sa na adrese Tolstého 22 v Košiciach, Slovensko. Ponúkame čisté izby a vhodnu polohu pre návštevníkov, ktorí chcú objavovať mesto. Hostia oceňujú náš ochotný personál, vynikajúci pomer ceny a kvality a blízkosť historického centra Košíc. Ideálne pre turistov, cestovateľov a návštevníkov hľadajúcich praktické a pohostinné ubytovanie."
          useInvertedBackground={false}
          buttons={[
            { text: "Zistiť viac", href: "#location" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Naše izby"
          description="Vyberte si z rôznych typov pohodlných izieb podľa vašich potrieb a rozpočtu. Každá izba je čistá, dobre udržiavaná a navrhnutá pre príjemný pobyt."
          tag="Ubytovanie"
          tagIcon={Home}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            { id: "1", name: "Súkromná izba", price: "Kontaktujte kvôli cenám", imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-working-with-her-laptop-bed_23-2147601448.jpg?_wi=2", imageAlt: "Súkromná izba s posteľou" },
            { id: "2", name: "Dvojlôžková izba", price: "Kontaktujte kvôli cenám", imageSrc: "http://img.b2bpic.net/free-photo/double-bed-with-four-pillows_1203-1107.jpg?_wi=2", imageAlt: "Dvojlôžková izba" },
            { id: "3", name: "Spoločná izba", price: "Kontaktujte kvôli cenám", imageSrc: "http://img.b2bpic.net/free-photo/friends-using-laptop-tablet-bed_23-2147766785.jpg?_wi=2", imageAlt: "Spoločná izba v hostelskom štýle" }
          ]}
        />
      </div>

      <div id="booking" data-section="booking">
        <ContactSplit
          tag="Rezervácie"
          tagIcon={Calendar}
          tagAnimation="slide-up"
          title="Rezervujte si pobyt"
          description="Vyberte si uprednostňované dátumy a typ izby a skontrolujte dostupnosť. Kontaktujte nás kvôli aktuálnym cenám a špeciálnym ponukám."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/pillow-bed_74190-6245.jpg?_wi=2"
          imageAlt="Rezervačný kalendár"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="vasa@email.com"
          buttonText="Skontrolovať dostupnosť"
          termsText="Čoskoro sa vám ozývame s dostupnými dátumami a informáciami o cenách."
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardFifteen
          testimonial="Hostel 26 ponúka skvelé ubytovanie, keď je mestské centrum obsadené. Personál nám pomohol aj neskoro v noci so špeciálnymi požiadavkami. Čisté izby, priateľská atmosféra a vynikajúca cena za kvalitu ho robia našou najlepšou odporúčanou voľbou."
          rating={5}
          author="Roman Varga, Košice"
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg", alt: "Roman Varga" },
            { src: "http://img.b2bpic.net/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg", alt: "Nikolas Kubík" },
            { src: "http://img.b2bpic.net/free-photo/man-green-shirt-smiling-confident_23-2148401382.jpg", alt: "Ján Boleček" },
            { src: "http://img.b2bpic.net/free-photo/purposeful-young-businessman-looking-away_1262-3609.jpg", alt: "Hosťový článok" }
          ]}
        />
      </div>

      <div id="reviews-detail" data-section="reviews-detail">
        <SocialProofOne
          title="Dôvera cestovateľov"
          description="Na základe 87 recenzií s priemerným hodnotením 4,3 z 5 hviezd"
          tag="Hosťovské recenzie"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Nádherný hostel s čistými a dobre vybranými izbami",            "Približne 10-15 minút chôdze od hlavného námestia",            "Flexibilita a ochota recepčného personálu",            "Skvelá poloha a pohodlný prístup k verejnej doprave",            "Priateľská atmosféra a pohostinné prostredie",            "Vynikajúci pomer ceny a kvality",            "Profesionálny a reagujúci manažérsky tím",            "Ideálne pre cestovateľov objavujúcich Košice"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="location" data-section="location">
        <FeatureCardTwelve
          title="Poloha a dostupnosť"
          description="Hostel 26 je strategicky umiestnený v Košiciach s pohodlným prístupom k verejnej doprave, miestnym atrakcií a historickému centru mesta. Naša centrálna poloha robí prieskum mesta ľahkým a príjemným."
          tag="Objavte Košice"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "address",              label: "Adresa",              title: "Tolstého 22, 040 01 Košice, Slovensko",              items: [
                "Pešky dostupné do centra mesta",                "V blízkosti zastávky verejnej dopravy",                "V tesnej blízkosti reštaurácií a kavární",                "Prístup k turistickým atrakcií"
              ]
            },
            {
              id: "attractions",              label: "V blízkosti",              title: "Objavte historické Košice",              items: [
                "Historická katedrála sv. Alžbety",                "Hlavné námestie s divadlami",                "Botanická záhrada neďaleko",                "Múzeá a galérie",                "Obchody a stravovacia ponuka"
              ]
            }
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <BlogCardOne
          title="Fotogaléria"
          description="Pozrite si vizuálny okruh Hostelu 26 a objavte naše pohodlné izby, pohostinné spoločné priestory a krásnu polohu v Košiciach."
          tag="Galéria"
          tagIcon={Images}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",              category: "Izby",              title: "Pohodlné spálne",              excerpt: "Naše čisté a dobre udržiavané súkromné a spoločné izby poskytujú príjemné útočisko po prehliadke mesta.",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-waking-up-morning_1153-3553.jpg?_wi=2",              imageAlt: "Spálňa hostelu",              authorName: "Hostel 26",              authorAvatar: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg",              date: "2025"
            },
            {
              id: "2",              category: "Izby",              title: "Moderné vybavenie",              excerpt: "Každá izba je vybavená moderným nábytkom a kvalitným posteľným prádlom, aby ste si užili pokojný spánok.",              imageSrc: "http://img.b2bpic.net/free-photo/white-comfortable-pillow-decoration-interior-bedroom_74190-11125.jpg",              imageAlt: "Moderná hostelská izba",              authorName: "Hostel 26",              authorAvatar: "http://img.b2bpic.net/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg",              date: "2025"
            },
            {
              id: "3",              category: "Exteriér",              title: "Pohostinný vstup",              excerpt: "Náš charakteristický exteriér znamená teplý vítanú cestovateľom navštevujúcim Košice.",              imageSrc: "http://img.b2bpic.net/free-photo/city-building_23-2148107104.jpg",              imageAlt: "Exteriér hostelu",              authorName: "Hostel 26",              authorAvatar: "http://img.b2bpic.net/free-photo/man-green-shirt-smiling-confident_23-2148401382.jpg",              date: "2025"
            },
            {
              id: "4",              category: "Spoločné priestory",              title: "Sociálne priestory",              excerpt: "Relaxujte a zoznámte sa s inými cestovateľmi v našich pohodlných spoločných priestoroch a salóne.",              imageSrc: "http://img.b2bpic.net/free-photo/colleagues-talking-learning-study-session_23-2149285455.jpg?_wi=2",              imageAlt: "Spoločná zóna",              authorName: "Hostel 26",              authorAvatar: "http://img.b2bpic.net/free-photo/purposeful-young-businessman-looking-away_1262-3609.jpg",              date: "2025"
            }
          ]}
        />
      </div>

      <div id="attractions" data-section="attractions">
        <FeatureCardTwelve
          title="Atrakcií v okolí"
          description="Košice je plná historických a kultúrnych atrakcií. Naša poloha vám umožňuje ľahký prístup k najlepším miestam mesta."
          tag="Čo navštíviť"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "culture",              label: "Kultúra",              title: "Historické pamiatky",              items: [
                "Katedrála sv. Alžbety – gotická architekúra",                "Mestský divadelný komplex",                "Staré mestské múzeum",                "Tradičné remeslá a umenie"
              ]
            },
            {
              id: "nature",              label: "Príroda",              title: "Zelené priestory",              items: [
                "Mestská botanická záhrada",                "Tabakulový strom – miesto stretávania",                "Parky a oddychové zóny",                "Okolo mesta les Košickej vrchoviny"
              ]
            },
            {
              id: "dining",              label: "Gastronómia",              title: "Miestne kuchyne",              items: [
                "Tradičné slovenskej kuchyne",                "Medzinárodné reštaurácie",                "Kavárne a caféčka",                "Miestne tržnice s čerstvým jedlom"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Kontaktujte nás"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Kontakt na Hostel 26"
          description="Máte otázky ohľadom rezervácie? Potrebujete špeciálne ubytovanie? Náš priateľský tím je tu, aby vám pomohol. Pošlite nám správu a my vám odpovedáme čo najskôr."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/pillow-bed_74190-6245.jpg?_wi=3"
          imageAlt="Kontaktujte náš tím"
          mediaAnimation="slide-up"
          mediaPosition="left"
          inputPlaceholder="vase.meno@email.com"
          buttonText="Poslať správu"
          termsText="Telefón: +421 910 122 556 | Vstup: 14:00 | Odpovedáme do 24 hodín."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Navigácia",              items: [
                { label: "Domov", href: "#hero" },
                { label: "Izby", href: "#rooms" },
                { label: "Recenzie", href: "#reviews" },
                { label: "Poloha", href: "#location" }
              ]
            },
            {
              title: "Rýchle odkazy",              items: [
                { label: "Rezervovať teraz", href: "#booking" },
                { label: "Galéria", href: "#gallery" },
                { label: "Kontakt", href: "#contact" },
                { label: "Atrakcií", href: "#attractions" }
              ]
            },
            {
              title: "Informácie",              items: [
                { label: "Tolstého 22, Košice", href: "#location" },
                { label: "+421 910 122 556", href: "tel:+421910122556" },
                { label: "Vstup: 14:00", href: "#" },
                { label: "Pravidlá", href: "#" }
              ]
            },
            {
              title: "Právne",              items: [
                { label: "Politika ochrany osobných údajov", href: "#" },
                { label: "Podmienky a zmluvy", href: "#" },
                { label: "Politika zrušenia", href: "#" },
                { label: "Politika cookies", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Hostel 26 Košice. Všetky práva vyhradené."
          bottomRightText="Vytvorené pre pohodlné cestovanie"
        />
      </div>
    </ThemeProvider>
  );
}