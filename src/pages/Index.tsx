import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import LandingPage from "./LandingPage";
import PatientDashboard from "./PatientDashboard";
import ProfessionalDashboard from "./ProfessionalDashboard";

const Index = () => {
  const { user, loading } = useAuth();
  const [userProfile, setUserProfile] = useState<any>(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      // User not authenticated, stay on landing page
      return;
    }

    if (user) {
      // User authenticated, fetch profile
      fetchUserProfile();
    }
  }, [user, loading]);

  const fetchUserProfile = async () => {
    if (!user) return;
    
    setProfileLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      setUserProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setProfileLoading(false);
    }
  };

  if (loading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <LandingPage onLogin={() => navigate('/auth')} />;
  }

  if (userProfile?.role === 'professional' || userProfile?.role === 'org_admin') {
    return <ProfessionalDashboard />;
  }

  return <PatientDashboard />;
};

export default Index;
