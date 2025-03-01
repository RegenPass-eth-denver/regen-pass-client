import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { MapPin, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/ui/button';
import Chatbot from '../../components/Chatbot';
import { NavbarDemo } from '../../components/navbar/navbar-menu';

// Add back the interfaces and events export
interface Host {
    name: string;
    avatar: string;
}

interface Event {
    slug: string;
    date: string;
    dayOfWeek: string;
    time: string;
    title: string;
    isLive?: boolean;
    hosts: Host[];
    location?: string;
    platform?: string;
    status?: string;
    thumbnail: string;
    description: string;
}

// Export the events array for EventDetails to use
export const events: Event[] = [
    {
        slug: 'eth-denver-2025',
        date: 'Feb 23',
        dayOfWeek: 'Sunday',
        time: '20:00 PM',
        title: 'ETH Denver',
        isLive: true,
        hosts: [{ name: 'ETH Global', avatar: '/placeholder.svg' }],
        platform: 'Zoom',
        description:
            'ETHDenver is a world renowned gathering place where developers, creators, and visionaries come together to address critical challenges and bring groundbreaking ideas to life in the fields of blockchain and distributed computing',
        thumbnail:
            'https://cdn.prod.website-files.com/669aeedffebb61f45e26347a/67ba12c2f7767b3983b2da54_ETHDEN2025_venue_event_map_stagelocations%20(1)-p-2600.jpg',
    },
    {
        slug: 'builders-house-at-ibw',
        date: 'Dec 3',
        dayOfWeek: 'Tuesday',
        time: '10:00 AM',
        title: 'ETH Taipei',
        hosts: [
            { name: 'Sanket', avatar: '/placeholder.svg' },
            { name: 'QuillAI Network', avatar: '/placeholder.svg' },
            { name: 'Parth', avatar: '/placeholder.svg' },
        ],
        location: '87, 11th Cross Rd, near Vintage Haven',
        status: 'Pending',
        description:
            '🌟 Welcome to the Builders House: Where BUIDLERs Takes Center Stage! 🚀 Join us for an unforgettable 2-day Builders House experience during India Blockchain Week (IBW) in the heart of Bangalore! This isn\'t just an event—its your creative playground, designed for builders, by builders.',
        thumbnail:
            'https://cdn.prod.website-files.com/669aeedffebb61f45e26347a/67ba12c2f7767b3983b2da54_ETHDEN2025_venue_event_map_stagelocations%20(1)-p-2600.jpg',
    },
    {
        slug: 'agent-singularity',
        date: 'Today',
        dayOfWeek: 'Saturday',
        time: '12:00 PM',
        title: 'Agent Singularity: Talks & Hackathon with Founders from a16z CSX, MIT, AG2',
        isLive: true,
        hosts: [{ name: 'Sparsity, Sui Community, Justin Zhang', avatar: '/placeholder.svg' }],
        location: 'Hyatt Place Denver/Downtown',
        description:
            'Join us for an exciting hackathon and talks with founders from leading companies in the AI and blockchain space.',
        thumbnail:
            'https://cdn.prod.website-files.com/669aeedffebb61f45e26347a/67ba12c2f7767b3983b2da54_ETHDEN2025_venue_event_map_stagelocations%20(1)-p-2600.jpg',
    },
    {
        slug: 'avails-unification-house',
        date: 'Feb 26',
        dayOfWeek: 'Wednesday',
        time: '4:00 PM',
        title: 'Avail\'s Unification House @ ETHDenver 2025',
        isLive: true,
        hosts: [{ name: 'Avail', avatar: '/placeholder.svg' }],
        location: '3128 W 32nd Ave',
        description:
            'Join Avail for their Unification House event at ETHDenver 2025.',
        thumbnail:
            'https://i.imgur.com/qM3CwRh.jpg',
    },
    {
        slug: 'startup-pitch-night',
        date: 'Mar 25',
        dayOfWeek: 'Tuesday',
        time: '6:00 PM',
        title: 'Startup Pitch Night',
        hosts: [{ name: 'Gladys', avatar: '/placeholder.svg' }],
        location: 'Location Shown Upon Approval',
        status: 'Pending',
        description:
            'Join us for an evening of innovative startup pitches from emerging entrepreneurs.',
        thumbnail:
            'https://i.imgur.com/W0CQ8RM.jpg',
    }
];

export default function EventsListing() {
    const navigate = useNavigate();
    const handleCheckoutEvent = (eventId: string) => {  
        navigate(`/events/${eventId}`);
    };

    return (
        <div className="relative">
            <img
                src="https://cdn.prod.website-files.com/669aeedffebb61f45e26347a/678eb7c9f8fcb0d17dbdaf48_ETHDEN2025_web_background_nopaper_header.webp"
                alt="bg"
                className="h-full absolute top-0 opacity-10"
            />
            <NavbarDemo />
            <div className="min-h-screen bg-white text-black p-4 sm:p-8 mt-[180px] sm:mt-[140px] md:mt-[160px]">
                <Chatbot />
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-semibold">Events</h1>
                        <div className="bg-gray-100 rounded-full p-0.5 border border-gray-200">
                            <Button
                                variant="ghost"
                                className="bg-gray-800 text-white rounded-full px-5 py-1.5 text-sm"
                            >
                                Upcoming
                            </Button>
                            <Button
                                variant="ghost"
                                className="text-gray-700 rounded-full px-5 py-1.5 text-sm"
                            >
                                Past
                            </Button>
                        </div>
                    </div>
                    
                    {/* Timeline Style Events List */}
                    <div className="relative px-2 sm:px-0">
                        {/* Timeline line - hidden on mobile, adjusted position */}
                        <div className="hidden sm:block absolute left-[128px] top-4 bottom-0 w-[2px] bg-gray-300"></div>
                        
                        {/* Event Groups */}
                        <div className="space-y-8 sm:space-y-12">
                            {/* Today's Events */}
                            <div>
                                <div className="flex items-center mb-4 sm:mb-6 relative">
                                    <div className="w-[80px] sm:w-28 flex flex-col pl-2 sm:pl-0">
                                        <span className="text-lg sm:text-xl font-semibold">Today</span>
                                        <span className="text-gray-500 text-sm sm:text-base">Saturday</span>
                                    </div>
                                    {/* Circle - hidden on mobile */}
                                    <div className="hidden sm:block h-6 w-6 rounded-full bg-white border-4 border-gray-400 z-10"></div>
                                </div>

                                {/* Event Card for Today */}
                                <div className="sm:ml-[140px]">
                                    <div className="bg-[#f1e8f9] rounded-xl overflow-hidden mb-6">
                                        <div className="p-6 relative">
                                            {/* Larger image - responsive for mobile */}
                                            <div className="hidden sm:block absolute top-0 right-0 w-[200px] h-full overflow-hidden">
                                                <img
                                                    src="https://cdn.prod.website-files.com/669aeedffebb61f45e26347a/67ba12c2f7767b3983b2da54_ETHDEN2025_venue_event_map_stagelocations%20(1)-p-2600.jpg"
                                                    alt="Event"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            
                                            {/* Mobile image at the top */}
                                            <div className="sm:hidden w-full h-[160px] mb-4 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://cdn.prod.website-files.com/669aeedffebb61f45e26347a/67ba12c2f7767b3983b2da54_ETHDEN2025_venue_event_map_stagelocations%20(1)-p-2600.jpg"
                                                    alt="Event"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            
                                            <div className="sm:max-w-[65%] w-full">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-[#9640ff] font-medium text-sm">LIVE</span>
                                                    <span className="text-gray-700">12:00 PM</span>
                                                </div>
                                                
                                                <h3 className="text-xl sm:text-2xl font-medium mb-3">Agent Singularity: Talks & Hackathon with Founders from a16z CSX, MIT, AG2</h3>
                                                
                                                <div className="mb-3">
                                                    <span className="text-gray-700 text-sm sm:text-base">By Sparsity, Sui Community, Justin Zhang</span>
                                                </div>
                                                
                                                <div className="flex items-center gap-2 text-gray-700 mb-4">
                                                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                                                    <span className="text-sm sm:text-base">Hyatt Place Denver/Downtown</span>
                                                </div>
                                                
                                                <Button className="bg-[#4caf50] hover:bg-[#43a047] text-white border-0 px-6 sm:px-8 py-2 rounded-full text-sm sm:text-base">
                                                    Going
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Feb 26 Events */}
                            <div>
                                <div className="flex items-center mb-4 sm:mb-6 relative">
                                    <div className="w-[80px] sm:w-28 flex flex-col pl-2 sm:pl-0">
                                        <span className="text-lg sm:text-xl font-semibold">Feb 26</span>
                                        <span className="text-gray-500 text-sm sm:text-base">Wednesday</span>
                                    </div>
                                    {/* Circle - hidden on mobile */}
                                    <div className="hidden sm:block h-6 w-6 rounded-full bg-white border-4 border-gray-400 z-10"></div>
                                </div>
                                
                                {/* Event Card for Feb 26 */}
                                <div className="sm:ml-[140px]">
                                    <div className="bg-[#f1e8f9] rounded-xl overflow-hidden mb-6">
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[#9640ff] font-medium text-sm">LIVE</span>
                                                <span className="text-gray-700">4:00 PM</span>
                                            </div>
                                            
                                            <h3 className="text-2xl font-medium mb-4">Avail's Unification House @ ETHDenver 2025</h3>
                                            
                                            <div className="flex items-center gap-2 mb-3">
                                                <Avatar className="h-8 w-8 bg-gray-200 rounded-md">
                                                    <AvatarFallback className="bg-gray-300 text-gray-700">A</AvatarFallback>
                                                </Avatar>
                                                <span className="text-gray-700">By Avail</span>
                                                    </div>
                                            
                                            <div className="flex items-center gap-2 text-gray-700 mb-4">
                                                <MapPin className="h-5 w-5 text-gray-600" />
                                                <span>3128 W 32nd Ave</span>
                                                    </div>
                                            
                                            <div className="flex justify-between items-center">
                                                <Button className="bg-[#4caf50] hover:bg-[#43a047] text-white border-0 px-8 py-2 rounded-full">
                                                    Going
                                                </Button>
                                                
                                                <div className="w-[200px] h-[120px] overflow-hidden rounded-md">
                                                    <img
                                                        src="https://i.imgur.com/qM3CwRh.jpg"
                                                        alt="Event"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Mar 25 Events */}
                            <div>
                                <div className="flex items-center mb-4 sm:mb-6 relative">
                                    <div className="w-[80px] sm:w-28 flex flex-col pl-2 sm:pl-0">
                                        <span className="text-lg sm:text-xl font-semibold">Mar 25</span>
                                        <span className="text-gray-500 text-sm sm:text-base">Tuesday</span>
                                    </div>
                                    {/* Circle - hidden on mobile */}
                                    <div className="hidden sm:block h-6 w-6 rounded-full bg-white border-4 border-gray-400 z-10"></div>
                                </div>
                                
                                {/* Event Card for Mar 25 */}
                                <div className="sm:ml-[140px]">
                                    <div className="bg-[#f1e8f9] rounded-xl overflow-hidden mb-6">
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-gray-700">6:00 PM - 5:00 PM PDT</span>
                                            </div>
                                            
                                            <h3 className="text-2xl font-medium mb-4">Startup Pitch Night</h3>
                                            
                                            <div className="flex items-center gap-2 mb-3">
                                                <Avatar className="h-8 w-8 bg-gray-200 rounded-md">
                                                    <AvatarFallback className="bg-gray-300 text-gray-700">G</AvatarFallback>
                                                </Avatar>
                                                <span className="text-gray-700">By Gladys</span>
                                            </div>
                                            
                                            <div className="flex items-center gap-2 text-gray-700 mb-4">
                                                <MapPin className="h-5 w-5 text-gray-600" />
                                                <span>Location Shown Upon Approval</span>
                                            </div>
                                            
                                            <div className="flex justify-between items-center">
                                                <Button className="bg-[#ff9800] hover:bg-[#f57c00] text-white border-0 px-8 py-2 rounded-full">
                                                    Pending
                                                </Button>
                                                
                                                <div className="w-[200px] h-[120px] overflow-hidden rounded-md">
                                                    <img
                                                        src="https://i.imgur.com/W0CQ8RM.jpg"
                                                        alt="Event"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
