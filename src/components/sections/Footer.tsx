import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react'
import { FooterBackgroundGradient, TextHoverEffect } from '@/components/ui/hover-footer'

export default function Footer() {
  const footerLinks = [
    {
      title: 'Navigate',
      links: [
        { label: 'Work', href: '#work' },
        { label: 'About', href: '#about' },
        { label: 'News', href: '#news' },
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Ventures',
      links: [
        { label: 'New Business', href: 'mailto:hello@our-revolution.com' },
        { label: 'Ventures', href: 'mailto:ventures@our-revolution.com' },
        { label: 'Careers', href: '#' },
      ],
    },
  ]

  const offices = [
    {
      city: 'Sydney',
      address: 'C26, 99 Jones Street, Ultimo, Sydney, NSW 2007, Australia',
      email: 'sydney@our-revolution.com',
      phone: '+61 (0)2 8034 2611',
    },
    {
      city: 'London',
      address: '86-90 Paul Street, London, EC2A 4NE, United Kingdom',
      email: 'london@our-revolution.com',
      phone: '+44 (0)20 3131 0036',
    },
  ]

  return (
    <footer id="contact" className="bg-[#111111] relative rounded-t-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto p-10 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <span className="text-[#F5F0EB] text-2xl font-bold tracking-tight">
              Our Revolution
            </span>
            <p className="text-[#9A9490] text-sm leading-relaxed">
              Brand design & packaging design agency creating what the future holds.
            </p>
            <a
              href="mailto:hello@our-revolution.com"
              className="text-[#F5F0EB] text-sm hover:text-[#E8E0D5] transition-colors"
            >
              hello@our-revolution.com
            </a>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[#F5F0EB] text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#9A9490] hover:text-[#F5F0EB] transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Offices */}
          <div>
            <h4 className="text-[#F5F0EB] text-lg font-semibold mb-6">Studios</h4>
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.city} className="space-y-2">
                  <h5 className="text-[#F5F0EB] text-sm font-semibold uppercase tracking-wider">{office.city}</h5>
                  <div className="flex items-start gap-2 text-[#9A9490] text-xs">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#9A9490] text-xs">
                    <Mail size={14} className="shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-[#F5F0EB] transition-colors">{office.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-[#9A9490] text-xs">
                    <Phone size={14} className="shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-[#F5F0EB] transition-colors">{office.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-t border-[#2B2B2B] my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-[#9A9490]">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#F5F0EB] transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-[#9A9490] text-center md:text-left text-xs">
            &copy; {new Date().getFullYear()} Our Revolution. All rights reserved. Creating what the future holds.
          </p>
        </div>
      </div>

      {/* Hover text effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Revolution" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}
