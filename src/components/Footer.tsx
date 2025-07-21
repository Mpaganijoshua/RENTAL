import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Home, Shield, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Home className="text-white font-bold h-5 w-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-primary">Nyumba</span>
                <span className="text-xl font-bold text-serengeti-400">Link</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{t('footer.location')}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+255750929317" className="hover:text-primary transition-colors">
                  +255 750 929 317
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@nyumbalink.co.tz" className="hover:text-primary transition-colors">
                  info@nyumbalink.co.tz
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.importantPages')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <Home className="h-4 w-4 mr-2" />
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {t('footer.searchHouses')}
                </Link>
              </li>
              <li>
                <Link to="/signup?type=landlord" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  {t('footer.becomeLandlord')}
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  {t('footer.dashboard')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.supportLegal')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  {t('footer.faq')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  {t('footer.contactUs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  {t('footer.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  {t('footer.termsOfUse')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  {t('footer.safetyGuidelines')}
                </a>
              </li>
            </ul>
          </div>

          {/* App Features */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.ourServices')}</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>{t('footer.easySearch')}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>{t('footer.directCommunication')}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>{t('footer.highSecurity')}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>{t('footer.customerService')}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>{t('footer.modernFilters')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* App Statistics */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">1000+</div>
              <div className="text-gray-400 text-sm">{t('footer.registeredHouses')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">500+</div>
              <div className="text-gray-400 text-sm">{t('footer.landlords')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-gray-400 text-sm">{t('footer.cities')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">5000+</div>
              <div className="text-gray-400 text-sm">{t('footer.users')}</div>
            </div>
          </div>
        </div>

        {/* Bottom section with creator info */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Nyumba Link. {t('footer.rightsReserved')}
            </div>
            
            {/* Creator Attribution */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center text-gray-300 text-sm">
                <span>{t('footer.createdWith')}</span>
                <Heart className="h-4 w-4 text-red-500 mx-2 fill-current" />
                <span className="font-semibold text-primary">StarLabs AI</span>
              </div>
              
              <div className="hidden md:block w-px h-4 bg-gray-600"></div>
              
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-3 w-3 mr-1" />
                <a href="tel:+255750929317" className="hover:text-primary transition-colors">
                  +255 750 929 317
                </a>
              </div>
            </div>
          </div>
          
          {/* Additional creator info */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">
                {t('footer.aiDescription')}
              </p>
              <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
                <span>{t('footer.poweredBy')}</span>
                <span>•</span>
                <span>{t('footer.madeWith')}</span>
                <span>•</span>
                <span>{t('footer.hostedOn')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;