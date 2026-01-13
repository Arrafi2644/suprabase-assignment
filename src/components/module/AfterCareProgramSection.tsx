"use client";

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import cardImage from "../../../public/assets/card-image.png"
import checkMarkImage from "../../../public/assets/Frame 248.png"

interface WeekOption {
  id: number;
  weeks: number;
  days: number;
  price: number;
}

interface DatePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedWeeks: number;
}

interface WeekCardProps {
  option: WeekOption;
  isSelected: boolean;
  onSelect: (weeks: number) => void;
}

interface ExpandedSectionProps {
  selectedOption: WeekOption;
  startDate: string;
  endDate: string;
  onStartDateClick: () => void;
}

interface HeaderProps {
  onBack: () => void;
}

interface FooterProps {
  onBack: () => void;
  onNext: () => void;
}

const weekOptions: WeekOption[] = [
  { id: 1, weeks: 1, days: 5, price: 35 },
  { id: 2, weeks: 2, days: 10, price: 70 },
  { id: 3, weeks: 3, days: 15, price: 105 },
  { id: 4, weeks: 4, days: 20, price: 140 },
];

const DecorativeElements: React.FC = () => {
  return (
    <>
      {/* Star */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="text-yellow-500 text-5xl">★</div>
      </div>
      
      {/* Character illustration bottom left */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="70" r="30" fill="#E9D5FF" />
          <ellipse cx="50" cy="50" rx="25" ry="35" fill="#DDD6FE" />
        </svg>
      </div>

      {/* Circle right side */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/4">
        <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
      </div>
      
      {/* Triangle right side */}
      <div className="absolute top-1/2 right-8">
        <div className="w-12 h-12 bg-orange-400 transform rotate-45"></div>
      </div>
    </>
  );
};

const Header: React.FC<HeaderProps> = ({ onBack }) => {
  return (
    <div className="mb-8">
      <button 
        onClick={onBack}
        className="text-gray-600 flex items-center gap-2 mb-4 hover:text-gray-800 transition-colors"
      >
        <span>‹</span> Regular aftercare program
      </button>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        How many weeks you like to continue?
      </h1>
      <p className="text-gray-600 text-sm">
        Based on your selection Mon, Tue, Thu, Fri, Sat
      </p>
    </div>
  );
};

const WeekCard: React.FC<WeekCardProps> = ({ option, isSelected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(option.weeks)}
      className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all relative
      }`}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
          <Image
          src={checkMarkImage}
          alt='selected'
          height={20}
          width={20}
          />
        </div>
      )}
      <div className="mb-4">
        {/* <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 80'%3E%3Crect x='10' y='20' width='100' height='50' rx='5' fill='%23FEF3C7'/%3E%3Crect x='20' y='15' width='15' height='8' rx='2' fill='%2310B981'/%3E%3Crect x='85' y='15' width='15' height='8' rx='2' fill='%2310B981'/%3E%3Crect x='25' y='30' width='20' height='3' fill='%2393C5FD'/%3E%3Crect x='25' y='37' width='15' height='3' fill='%2393C5FD'/%3E%3Crect x='75' y='30' width='20' height='3' fill='%2393C5FD'/%3E%3Crect x='75' y='37' width='15' height='3' fill='%2393C5FD'/%3E%3Ccircle cx='60' cy='45' r='12' fill='%23FDE047'/%3E%3Cpath d='M55 45 L58 48 L65 41' stroke='white' stroke-width='2' fill='none'/%3E%3Ccircle cx='30' cy='55' r='3' fill='%23FB923C'/%3E%3Ccircle cx='90' cy='55' r='3' fill='%23FB923C'/%3E%3C/svg%3E"
          alt="Program icon"
          className="w-20 h-16 mx-auto"
        /> */}
        <Image
        src={cardImage}
        alt='card-image'
        width={100}
        height={100}
        className='mx-auto'
        />
      </div>
      <div className="text-center">
        <div className="font-bold text-gray-900 mb-1">
          {option.weeks} {option.weeks === 1 ? 'WEEK' : 'WEEKS'}
        </div>
        <div className="text-sm text-gray-600">
          ${option.price} for {option.days} days
        </div>
      </div>
    </button>
  );
};

const WeekOptionsGrid: React.FC<{
  selectedWeeks: number | null;
  onSelect: (weeks: number) => void;
}> = ({ selectedWeeks, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {weekOptions.map((option) => (
        <WeekCard
          key={option.id}
          option={option}
          isSelected={selectedWeeks === option.weeks}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

const ExpandedSection: React.FC<ExpandedSectionProps> = ({
  selectedOption,
  startDate,
  endDate,
  onStartDateClick,
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
      <div className="text-center mb-6">
        <div className="font-bold text-gray-900 mb-1">
          {selectedOption.weeks} WEEKS
        </div>
        <div className="text-sm text-gray-600">
          ({selectedOption.weeks} Weeks X 5 Days) = {selectedOption.days} Days
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">Start date</label>
          <div
            onClick={onStartDateClick}
            className="border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer hover:border-purple-500 transition-colors"
          >
            <span className={startDate ? "text-gray-900" : "text-gray-400"}>
              {startDate || "Start date"}
            </span>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {startDate && (
          <div>
            <label className="block text-sm text-gray-600 mb-2">End date</label>
            <div className="border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">{endDate}</span>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ onBack, onNext }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="text-sm text-gray-900 font-medium">
        ${weekOptions[0].price} FOR 5 DAYS (1 ACTIVITY PER DAY)
      </div>
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors"
        >
          BACK
        </button>
        <button 
          onClick={onNext}
          className="px-8 py-2 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition-colors"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

const DatePickerModal: React.FC<DatePickerProps> = ({
  isOpen,
  onClose,
  onConfirm,
  selectedWeeks,
}) => {
  const [tempDate, setTempDate] = useState({ day: 18, month: "June", year: 2013 });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Please select your start date
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          {/* Day Picker */}
          <div className="flex flex-col items-center">
            <div className="h-32 overflow-y-scroll scrollbar-hide">
              {[16, 17, 18, 19, 20].map((day) => (
                <div
                  key={day}
                  className={`py-2 px-4 cursor-pointer text-center ${
                    tempDate.day === day
                      ? 'text-gray-900 font-bold text-xl'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setTempDate({ ...tempDate, day })}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-32 overflow-y-scroll scrollbar-hide">
              {['April', 'May', 'June', 'July', 'August'].map((month) => (
                <div
                  key={month}
                  className={`py-2 px-4 cursor-pointer text-center ${
                    tempDate.month === month
                      ? 'text-gray-900 font-bold text-xl'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setTempDate({ ...tempDate, month })}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-32 overflow-y-scroll scrollbar-hide">
              {[2011, 2012, 2013, 2014, 2015].map((year) => (
                <div
                  key={year}
                  className={`py-2 px-4 cursor-pointer text-center ${
                    tempDate.year === year
                      ? 'text-gray-900 font-bold text-xl'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setTempDate({ ...tempDate, year })}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            <span className="font-bold">NB:</span> You've chosen a {selectedWeeks}-week schedule starting on June 18, 2026,
            with sessions on Mon, Tue, Thu, Fri, and Sat.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            We'll automatically set your end date, and you can renew whenever
            you like — no worries!
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 text-red-500 font-bold hover:text-red-600 transition-colors"
          >
            CANCEL
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors"
          >
            CONFIRM
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

const AftercareProgramSelector: React.FC = () => {
  const [selectedWeeks, setSelectedWeeks] = useState<number | null>(null);
  const [showDateModal, setShowDateModal] = useState(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleWeekSelect = (weeks: number) => {
    setSelectedWeeks(weeks);
  };

  const handleStartDateClick = () => {
    setShowDateModal(true);
  };

  const handleDateConfirm = () => {
    const selectedOption = weekOptions.find(opt => opt.weeks === selectedWeeks);
    if (selectedOption) {
      const start = new Date(2026, 5, 18); // June 18, 2026
      const end = new Date(start);
      end.setDate(start.getDate() + selectedOption.days);
      
      setStartDate("06/18/2026");
      setEndDate(`${String(end.getMonth() + 1).padStart(2, '0')}/${String(end.getDate()).padStart(2, '0')}/${end.getFullYear()}`);
    }
    setShowDateModal(false);
  };

  const handleModalClose = () => {
    setShowDateModal(false);
  };

  const handleBack = () => {
    setSelectedWeeks(null);
    setStartDate("");
    setEndDate("");
  };

  const handleNext = () => {
    console.log('Proceeding to next step');
  };

  const selectedOption = weekOptions.find(opt => opt.weeks === selectedWeeks);

  return (
    <div className="min-h-screen bg-linear-to-t from-gray-100 to-gray-50 relative overflow-hidden">
      <DecorativeElements />

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <Header onBack={handleBack} />
        
        <WeekOptionsGrid 
          selectedWeeks={selectedWeeks} 
          onSelect={handleWeekSelect} 
        />

        {selectedWeeks && selectedOption && (
          <ExpandedSection
            selectedOption={selectedOption}
            startDate={startDate}
            endDate={endDate}
            onStartDateClick={handleStartDateClick}
          />
        )}

        <Footer onBack={handleBack} onNext={handleNext} />
      </div>

      <DatePickerModal
        isOpen={showDateModal}
        onClose={handleModalClose}
        onConfirm={handleDateConfirm}
        selectedWeeks={selectedWeeks || 4}
      />
    </div>
  );
};

export default AftercareProgramSelector;