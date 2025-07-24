/**
 * ABOUT.TSX - ENHANCED ABOUT US PAGE
 * ==================================
 * 
 * Ukurasa wa kuhusu Nyumba Link ulioboreshwa - Enhanced About Us page for Nyumba Link
 * 
 * FUNCTIONALITY / KAZI:
 * - Displays company information and mission (Kuonyesha maelezo ya kampuni na dhamira)
 * - Shows team information and values (Kuonyesha maelezo ya timu na maadili)
 * - Provides contact information (Kutoa maelezo ya mawasiliano)
 * - Explains platform benefits and features (Kuelezea faida na vipengele vya jukwaa)
 * 
 * ENHANCED DESIGN FEATURES / VIPENGELE VYA MUUNDO VILIVYOBORESHWA:
 * - Modern gradient backgrounds (Mandhari ya kisasa ya gradient)
 * - Smooth animations and transitions (Mchoro laini na mabadiliko)
 * - Interactive hover effects (Athari za mwingiliano za hover)
 * - Responsive grid layouts (Mipangilio ya gridi inayojibu)
 * - Professional card designs (Muundo wa kitaalamu wa kadi)
 * - Enhanced typography and spacing (Maandishi na nafasi zilizoboreswa)
 */

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  Search,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * ENHANCED ABOUT US PAGE COMPONENT
 * ===============================
 * 
 * Main component that displays comprehensive information about Nyumba Link,
 * with enhanced visual design, animations, and modern UI elements.
 * 
 * Kipengele kikuu kinachoonyesha maelezo makamilifu kuhusu Nyumba Link,
 * na muundo wa kuona ulioboreshwa, mchoro, na vipengele vya kisasa vya UI.
 */
const About = () => {
  const { t } = useTranslation();

  /**
   * ENHANCED COMPANY STATISTICS
   * ==========================
   * 
   * Key metrics with enhanced visual presentation and animations.
   */
  const stats = [
    { 
      icon: Building2, 
      number: '1000+', 
      label: t('about.registeredProperties'),
      gradient: 'from-blue-500 to-blue-600',
      delay: 'delay-0'
    },
    { 
      icon: Users, 
      number: '500+', 
      label: t('about.landlords'),
      gradient: 'from-green-500 to-green-600',
      delay: 'delay-100'
    },
    { 
      icon: Globe, 
      number: '50+', 
      label: t('about.cities'),
      gradient: 'from-purple-500 to-purple-600',
      delay: 'delay-200'
    },
    { 
      icon: Star, 
      number: '5000+', 
      label: t('about.happyUsers'),
      gradient: 'from-orange-500 to-orange-600',
      delay: 'delay-300'
    }
  ];

  /**
   * ENHANCED CORE VALUES
   * ===================
   * 
   * Company values with improved visual design and hover effects.
   */
  const values = [
    {
      icon: Shield,
      title: t('about.security'),
      description: t('about.securityText'),
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: t('about.simplicity'),
      description: t('about.simplicityText'),
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Heart,
      title: t('about.trust'),
      description: t('about.trustText'),
      gradient: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Award,
      title: t('about.excellence'),
      description: t('about.excellenceText'),
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  /**
   * ENHANCED TEAM MEMBERS
   * ====================
   * 
   * Team showcase with improved visual presentation.
   */
  const team = [
    {
      name: 'StarLabs AI',
      role: t('about.leadDeveloper'),
      description: t('about.aiTeamDescription'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      gradient: 'from-primary to-serengeti-500'
    },
    {
      name: t('about.developmentTeam'),
      role: t('about.systemCreators'),
      description: t('about.developersDescription'),
      image: 'https://images.unsplash.com/photo-1522075469751-3847ae2c3d8c?w=300&h=300&fit=crop&crop=face',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: t('about.serviceTeam'),
      role: t('about.customerSupport'),
      description: t('about.supportDescription'),
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      
      {/* Enhanced Hero Section - Sehemu ya Kishujaa Iliyoboreshwa */}
      <section className="relative bg-gradient-to-br from-primary/5 via-serengeti-50 to-blue-50 py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-serengeti-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Enhanced Logo Section */}
            <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-serengeti-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                  <Home className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-serengeti-600 bg-clip-text text-transparent">
                    Nyumba
                  </span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-serengeti-600 to-primary bg-clip-text text-transparent">
                    Link
                  </span>
                </div>
                <Badge className="mt-2 bg-gradient-to-r from-primary to-serengeti-500 text-white border-0">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Tanzania's #1 Housing Platform
                </Badge>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in delay-200">
              <span className="bg-gradient-to-r from-gray-900 via-primary to-serengeti-600 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
              {t('about.subtitle')}
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in delay-500">
              <Link to="/browse">
                <Button size="lg" className="bg-gradient-to-r from-primary to-serengeti-500 hover:from-primary/90 hover:to-serengeti-600 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <Search className="h-5 w-5 mr-2" />
                  {t('about.searchHouses')}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/signup?type=landlord">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Building2 className="h-5 w-5 mr-2" />
                  {t('about.registerAsLandlord')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission Card */}
            <Card className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-serengeti-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-serengeti-600 bg-clip-text text-transparent">
                    {t('about.mission')}
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('about.missionText')}
                </p>
                <div className="mt-6 flex items-center text-primary font-semibold">
                  <Play className="h-4 w-4 mr-2" />
                  Learn More About Our Mission
                </div>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {t('about.vision')}
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('about.visionText')}
                </p>
                <div className="mt-6 flex items-center text-purple-600 font-semibold">
                  <Play className="h-4 w-4 mr-2" />
                  Discover Our Vision
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-serengeti-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              {t('about.achievements')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('about.achievementsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className={`group border-0 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${stat.delay} animate-fade-in`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-4 w-4 mr-2" />
              Our Core Values
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t('about.values')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`group border-0 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 ${value.bgColor} hover:bg-white`}>
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`relative w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-all duration-300 shadow-lg`}>
                    <value.icon className={`h-10 w-10 ${value.iconColor} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Hover Effect Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-blue-100 text-blue-600 border-blue-200">
              <Users className="h-4 w-4 mr-2" />
              Meet Our Team
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t('about.team')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.teamSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <Card key={index} className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 bg-white overflow-hidden">
                <CardContent className="p-0">
                  {/* Enhanced Image Section */}
                  <div className="relative overflow-hidden">
                    <div className="w-full h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4 text-lg">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                    
                    {/* Social Links Placeholder */}
                    <div className="flex justify-center space-x-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">in</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">@</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-green-100 text-green-600 border-green-200">
              <Phone className="h-4 w-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t('about.contact')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.contactSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Enhanced Phone Contact */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {t('about.callUs')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('about.callDescription')}
                </p>
                <a 
                  href="tel:+255750929317"
                  className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +255 750 929 317
                </a>
              </CardContent>
            </Card>

            {/* Enhanced Email Contact */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {t('about.email')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('about.emailDescription')}
                </p>
                <a 
                  href="mailto:info@nyumbalink.co.tz"
                  className="inline-flex items-center text-green-600 font-bold text-lg hover:text-green-700 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  info@nyumbalink.co.tz
                </a>
              </CardContent>
            </Card>

            {/* Enhanced Location */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {t('about.location')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('about.locationDescription')}
                </p>
                <p className="text-purple-600 font-bold text-lg">
                  <MapPin className="h-5 w-5 inline mr-2" />
                  Dar es Salaam, Tanzania
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary via-serengeti-500 to-primary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {t('about.readyToStart')}
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              {t('about.joinThousands')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup?type=landlord">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg px-10 py-4">
                  <Home className="h-6 w-6 mr-3" />
                  {t('about.registerAsLandlord')}
                  <ArrowRight className="h-6 w-6 ml-3" />
                </Button>
              </Link>
              <Link to="/browse">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg px-10 py-4"
                >
                  <Search className="h-6 w-6 mr-3" />
                  {t('about.searchHouses')}
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-white/80">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Verified Landlords</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span>5-Star Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;