
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Check, ChevronLeft, ChevronRight, Fruit } from "lucide-react";

interface ProductPreferenceQuizProps {
  onComplete: () => void;
}

// This would contain real data in a production app
const PREFERENCE_QUESTIONS = [
  {
    category: "fruits",
    label: "Fruits & Vegetables",
    icon: <Fruit className="h-5 w-5" />,
    questions: [
      {
        id: "apple-type",
        question: "What type of apples do you prefer?",
        options: [
          { value: "red-delicious", label: "Red Delicious" },
          { value: "granny-smith", label: "Granny Smith" },
          { value: "honeycrisp", label: "Honeycrisp" },
          { value: "gala", label: "Gala" },
        ]
      },
      {
        id: "organic-preference",
        question: "Do you prefer organic produce?",
        options: [
          { value: "always", label: "Always" },
          { value: "sometimes", label: "Sometimes" },
          { value: "rarely", label: "Rarely" },
          { value: "never", label: "Never" },
        ]
      },
      {
        id: "produce-packaging",
        question: "How do you prefer your produce packaged?",
        options: [
          { value: "loose", label: "Individual/Loose" },
          { value: "pre-packaged", label: "Pre-packaged" },
          { value: "bulk", label: "Bulk bags" },
        ]
      }
    ]
  },
  {
    category: "dairy",
    label: "Dairy & Alternatives",
    icon: <Fruit className="h-5 w-5" />,
    questions: [
      {
        id: "milk-type",
        question: "What type of milk do you typically buy?",
        options: [
          { value: "whole", label: "Whole milk" },
          { value: "skim", label: "Skim milk" },
          { value: "almond", label: "Almond milk" },
          { value: "oat", label: "Oat milk" },
        ]
      },
      {
        id: "cheese-preference",
        question: "What types of cheese do you prefer?",
        options: [
          { value: "cheddar", label: "Cheddar" },
          { value: "mozzarella", label: "Mozzarella" },
          { value: "specialty", label: "Specialty cheeses" },
          { value: "none", label: "I don't buy cheese" },
        ]
      }
    ]
  },
  {
    category: "meat",
    label: "Meat & Proteins",
    icon: <Fruit className="h-5 w-5" />,
    questions: [
      {
        id: "meat-preference",
        question: "What types of meat do you regularly purchase?",
        options: [
          { value: "chicken", label: "Chicken" },
          { value: "beef", label: "Beef" },
          { value: "pork", label: "Pork" },
          { value: "fish", label: "Fish" },
          { value: "none", label: "I don't eat meat" },
        ]
      },
      {
        id: "meat-quality",
        question: "What quality of meat do you prefer?",
        options: [
          { value: "premium", label: "Premium/organic" },
          { value: "standard", label: "Standard quality" },
          { value: "value", label: "Value options" },
        ]
      }
    ]
  },
  // More categories could be added here
];

export function ProductPreferenceQuiz({ onComplete }: ProductPreferenceQuizProps) {
  const [activeTab, setActiveTab] = useState(PREFERENCE_QUESTIONS[0].category);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [progress, setProgress] = useState(0);
  
  // Calculate total questions across all categories
  const totalQuestions = PREFERENCE_QUESTIONS.reduce(
    (sum, category) => sum + category.questions.length, 
    0
  );
  
  // Count answered questions
  const answeredQuestions = Object.keys(answers).length;
  
  // Update progress whenever answers change
  React.useEffect(() => {
    setProgress((answeredQuestions / totalQuestions) * 100);
  }, [answers, totalQuestions]);
  
  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };
  
  const currentCategory = PREFERENCE_QUESTIONS.find(cat => cat.category === activeTab);
  const currentQuestion = currentCategory?.questions[currentQuestionIndex];
  
  const handleNext = () => {
    if (!currentCategory) return;
    
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Find next category
      const currentCategoryIndex = PREFERENCE_QUESTIONS.findIndex(cat => cat.category === activeTab);
      if (currentCategoryIndex < PREFERENCE_QUESTIONS.length - 1) {
        const nextCategory = PREFERENCE_QUESTIONS[currentCategoryIndex + 1].category;
        setActiveTab(nextCategory);
        setCurrentQuestionIndex(0);
      }
    }
  };
  
  const handlePrevious = () => {
    if (!currentCategory) return;
    
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      // Find previous category
      const currentCategoryIndex = PREFERENCE_QUESTIONS.findIndex(cat => cat.category === activeTab);
      if (currentCategoryIndex > 0) {
        const prevCategory = PREFERENCE_QUESTIONS[currentCategoryIndex - 1].category;
        setActiveTab(prevCategory);
        setCurrentQuestionIndex(PREFERENCE_QUESTIONS[currentCategoryIndex - 1].questions.length - 1);
      }
    }
  };
  
  const isLastQuestion = 
    activeTab === PREFERENCE_QUESTIONS[PREFERENCE_QUESTIONS.length - 1].category && 
    currentQuestionIndex === PREFERENCE_QUESTIONS[PREFERENCE_QUESTIONS.length - 1].questions.length - 1;
  
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Your progress</span>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 w-full h-auto flex overflow-x-auto py-2 justify-start">
          {PREFERENCE_QUESTIONS.map((category) => (
            <TabsTrigger 
              key={category.category} 
              value={category.category}
              className="flex items-center gap-2"
            >
              {category.icon}
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {PREFERENCE_QUESTIONS.map((category) => (
          <TabsContent key={category.category} value={category.category} className="mt-0">
            {currentQuestion && (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
                  
                  <RadioGroup
                    value={answers[currentQuestion.id] || ""}
                    onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                    className="space-y-3"
                  >
                    {currentQuestion.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={option.value} 
                          id={`${currentQuestion.id}-${option.value}`} 
                        />
                        <Label htmlFor={`${currentQuestion.id}-${option.value}`}>
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            )}
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0 && activeTab === PREFERENCE_QUESTIONS[0].category}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              {isLastQuestion ? (
                <Button 
                  onClick={onComplete}
                  disabled={answeredQuestions < totalQuestions}
                  className="flex items-center gap-2"
                >
                  Complete
                  <Check className="h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  disabled={!answers[currentQuestion?.id || ""]}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
            
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
