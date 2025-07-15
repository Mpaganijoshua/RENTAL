/**
 * PROFILESETTINGS.TSX - PROFILE SETTINGS COMPONENT
 * ===============================================
 * 
 * Kipengele cha mipangilio ya profaili - Profile settings component
 * 
 * FUNCTIONALITY / KAZI:
 * - Handles user profile editing (Kushughulikia kuhariri profaili ya mtumiaji)
 * - Manages profile form state (Kusimamia hali ya fomu ya profaili)
 * - Provides profile update functionality (Kutoa utendakazi wa kusasisha profaili)
 * - Handles form validation and submission (Kushughulikia uthibitisho na uwasilishaji wa fomu)
 * 
 * FEATURES / VIPENGELE:
 * - Profile information editing (Kuhariri maelezo ya profaili)
 * - Form validation (Uthibitisho wa fomu)
 * - Loading states (Hali za kupakia)
 * - Error handling (Kushughulikia makosa)
 */

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Save, RefreshCw } from 'lucide-react';
import type { Tables } from '@/integrations/supabase/types';

type Profile = Tables<'profiles'>;

/**
 * PROFILE FORM DATA INTERFACE
 * ==========================
 * 
 * Defines the structure for profile form data.
 */
interface ProfileFormData {
  full_name: string;
  phone: string;
  user_type: string;
}

interface ProfileSettingsProps {
  isOpen: boolean;
  profileForm: ProfileFormData;
  profileLoading: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onInputChange: (field: keyof ProfileFormData, value: string) => void;
}

/**
 * PROFILE SETTINGS COMPONENT
 * ==========================
 * 
 * Modal dialog component for editing user profile information.
 * Handles profile form interactions and validation.
 * 
 * Kipengele cha mazungumzo ya modal kwa kuhariri maelezo ya profaili ya mtumiaji.
 * Kinashughulikia mwingiliano wa fomu ya profaili na uthibitisho.
 */
const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  isOpen,
  profileForm,
  profileLoading,
  onClose,
  onSubmit,
  onInputChange
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Sasisha Maelezo ya Akaunti
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="full_name">Jina Kamili</Label>
            <Input
              id="full_name"
              value={profileForm.full_name}
              onChange={(e) => onInputChange('full_name', e.target.value)}
              placeholder="Weka jina lako kamili"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Nambari ya Simu</Label>
            <Input
              id="phone"
              type="tel"
              value={profileForm.phone}
              onChange={(e) => onInputChange('phone', e.target.value)}
              placeholder="+255712345678"
              required
            />
          </div>

          <div>
            <Label htmlFor="user_type">Aina ya Mtumiaji</Label>
            <Input
              value="Mwenye Nyumba/Mpangisha"
              disabled
              className="bg-gray-50 text-gray-600"
            />
            <p className="text-xs text-gray-500 mt-1">
              Aina ya akaunti haiwezi kubadilishwa
            </p>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={onClose}
              disabled={profileLoading}
            >
              Sitisha
            </Button>
            <Button 
              type="submit" 
              disabled={profileLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {profileLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Inahifadhi...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Hifadhi
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSettings;