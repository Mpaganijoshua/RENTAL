/**
 * ABOUT.TSX - ABOUT US PAGE
 * ========================
 * 
 * Ukurasa wa kuhusu Nyumba Link - About Us page for Nyumba Link
 * 
 * FUNCTIONALITY / KAZI:
 * - Displays company information and mission (Kuonyesha maelezo ya kampuni na dhamira)
 * - Shows team information and values (Kuonyesha maelezo ya timu na maadili)
 * - Provides contact information (Kutoa maelezo ya mawasiliano)
 * - Explains platform benefits and features (Kuelezea faida na vipengele vya jukwaa)
 * 
 * DESIGN FEATURES / VIPENGELE VYA MUUNDO:
 * - Hero section with company overview (Sehemu ya kishujaa na muhtasari wa kampuni)
 * - Mission and vision statements (Kauli za dhamira na maono)
 * - Team showcase (Onyesho la timu)
 * - Statistics and achievements (Takwimu na mafanikio)
 * - Contact information (Maelezo ya mawasiliano)
 */

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Users, 
  Target, 
  Heart, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Award,
  Building2,
  Globe,
  Eye,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * ABOUT US PAGE COMPONENT
 * ======================
 * 
 * Main component that displays comprehensive information about Nyumba Link,
 * including company mission, team, achievements, and contact details.
 * 
 * Kipengele kikuu kinachoonyesha maelezo makamilifu kuhusu Nyumba Link,
 * ikijumuisha dhamira ya kampuni, timu, mafanikio, na maelezo ya mawasiliano.
 */
const About = () => {
  /**
   * COMPANY STATISTICS
   * =================
   * 
   * Key metrics and achievements of the platform.
   */
  const stats = [
    { icon: Building2, number: '1000+', label: t('about.registeredProperties') },
    { icon: Users, number: '500+', label: t('about.landlords') },
    { icon: Globe, number: '50+', label: t('about.cities') },
    { icon: Star, number: '5000+', label: t('about.happyUsers') }
  ];

  /**
   * CORE VALUES
   * ===========
   * 
   * Company values and principles.
   */
  const values = [
    {
      icon: Shield,
      title: t('about.security'),
      description: t('about.securityText')
    },
    {
      icon: Zap,
      title: t('about.simplicity'),
      description: t('about.simplicityText')
    },
    {
      icon: Heart,
      title: t('about.trust'),
      description: t('about.trustText')
    },
    {
      icon: Award,
      title: t('about.excellence'),
      description: t('about.excellenceText')
    }
  ];

  /**
   * TEAM MEMBERS
   * ===========
   * 
   * Key team members and their roles.
   */
  const team = [
    {
      name: 'StarLabs AI',
      role: t('about.leadDeveloper'),
      description: t('about.aiTeamDescription'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: t('about.developmentTeam'),
      role: t('about.systemCreators'),
      description: t('about.developersDescription'),
      image: 'https://images.unsplash.com/photo-1522075469751-3847ae2c3d8c?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: t('about.serviceTeam'),
      role: t('about.customerSupport'),
      description: t('about.supportDescription'),
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Sehemu ya Kishujaa */}
      <section className="bg-gradient-to-r from-primary/10 to-serengeti-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <Home className="h-10 w-10 text-white" />
              </div>
              <div>
                <span className="text-4xl font-bold text-primary">Nyumba</span>
                <span className="text-4xl font-bold text-serengeti-600">Link</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Sehemu ya Dhamira na Maono */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">{t('about.mission')}</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">{t('about.vision')}</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('about.visionText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section - Sehemu ya Takwimu */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.achievements')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.achievementsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Sehemu ya Maadili */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.values')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Sehemu ya Timu */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.team')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.teamSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Sehemu ya Mawasiliano */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.contact')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.contactSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('about.callUs')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('about.callDescription')}
                </p>
                <a 
                  href="tel:+255750929317"
                  className="text-primary font-semibold hover:underline"
                >
                  +255 750 929 317
                </a>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('about.email')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('about.emailDescription')}
                </p>
                <a 
                  href="mailto:info@nyumbalink.co.tz"
                  className="text-primary font-semibold hover:underline"
                >
                  info@nyumbalink.co.tz
                </a>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('about.location')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('about.locationDescription')}
                </p>
                <p className="text-primary font-semibold">
                  Dar es Salaam, Tanzania
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - Wito wa Kitendo */}
      <section className="py-20 bg-gradient-to-r from-primary to-serengeti-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('about.readyToStart')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('about.joinThousands')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup?type=landlord">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Home className="h-5 w-5 mr-2" />
                {t('about.registerAsLandlord')}
              </Button>
            </Link>
            <Link to="/browse">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Search className="h-5 w-5 mr-2" />
                {t('about.searchHouses')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;