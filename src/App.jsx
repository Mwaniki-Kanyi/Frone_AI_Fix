import React, { useState } from 'react';
import VideoBackground from './components/VideoBackground';
import Experience from './components/Experience';
import Overlay from './components/Overlay';
import AboutSection from './components/AboutSection';
import SocialContact from './components/SocialContact';
import RoleSelection from './components/RoleSelection';

import DashboardLayout from './components/Dashboard/DashboardLayout';
import GuestView from './components/Dashboard/RoleViews/GuestView';
import FarmOwnerView from './components/Dashboard/RoleViews/FarmOwnerView';
import AdminView from './components/Dashboard/RoleViews/AdminView';
import InvestorView from './components/Dashboard/RoleViews/InvestorView';

function App() {
    const [view, setView] = useState('landing'); // landing, auth, dashboard
    const [userRole, setUserRole] = useState(null);

    const handleAuthClick = (defaultRole = null) => {
        if (defaultRole === 'Guest') {
            setUserRole('Guest');
            setView('dashboard');
        } else {
            setView('auth');
        }
    };

    const handleRoleSelect = (role) => {
        setUserRole(role);
        setView('dashboard');
    };

    const handleLogout = () => {
        setView('landing');
        setUserRole(null);
        window.scrollTo(0, 0);
    };

    const renderDashboard = () => {
        switch (userRole) {
            case 'Guest': return <GuestView onUpgrade={handleRoleSelect} />;
            case 'Farm Owner': return <FarmOwnerView />;
            case 'Admin': return <AdminView />;
            case 'Investor': return <InvestorView />;
            default: return <GuestView onUpgrade={handleRoleSelect} />;
        }
    };

    return (
        <div className="relative w-full min-h-screen bg-[#080809] text-[#e0f2f1] overflow-x-hidden">
            {/* Background Layers (Fixed) - Hidden in dashboard for performance/clarity */}
            {view !== 'dashboard' && (
                <>
                    <VideoBackground />
                    <Experience />
                </>
            )}

            {/* Conditional Content Rendering */}
            <div className="relative z-20">
                {view === 'landing' && (
                    <>
                        <div className="h-screen w-full">
                            <Overlay onAuthClick={handleAuthClick} />
                        </div>
                        <AboutSection />
                        <SocialContact />
                    </>
                )}

                {view === 'auth' && (
                    <RoleSelection
                        onSelect={handleRoleSelect}
                        onBack={() => setView('landing')}
                    />
                )}

                {view === 'dashboard' && (
                    <DashboardLayout userRole={userRole} onLogout={handleLogout}>
                        {renderDashboard()}
                    </DashboardLayout>
                )}
            </div>

            {/* Global Grain/Noise Texture Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>
    );
}

export default App;
