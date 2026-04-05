import { CircleMenu } from '@/components/ui/circle-menu'
import { Home, Briefcase, Users, Newspaper, Mail } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-6 right-6 z-50">
      <CircleMenu
        items={[
          { label: 'Home', icon: <Home size={16} className="text-[#111111]" />, href: '#hero' },
          { label: 'Work', icon: <Briefcase size={16} className="text-[#111111]" />, href: '#work' },
          { label: 'About', icon: <Users size={16} className="text-[#111111]" />, href: '#about' },
          { label: 'News', icon: <Newspaper size={16} className="text-[#111111]" />, href: '#news' },
          { label: 'Contact', icon: <Mail size={16} className="text-[#111111]" />, href: '#contact' },
        ]}
      />
    </nav>
  )
}
