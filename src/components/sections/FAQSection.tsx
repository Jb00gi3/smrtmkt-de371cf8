
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all"
        onClick={onClick}
      >
        <span className="text-lg">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How does the price comparison work?",
      answer: "Our system monitors prices across numerous retailers in real-time. When you create a shopping list, our algorithm automatically finds the best matches for your items based on your preferences, then compares prices to create an optimized shopping plan."
    },
    {
      question: "Which stores do you compare?",
      answer: "We compare prices across major grocery chains, big-box retailers, wholesale clubs, and specialty stores. The specific stores depend on your location, but typically include 20+ retailers in each market area."
    },
    {
      question: "Is there a fee to use the service?",
      answer: "We offer a free basic plan that lets you create shopping lists and see basic price comparisons. Our premium plan offers advanced features like preference setting, historical price tracking, and sale predictions for a small monthly fee."
    },
    {
      question: "How accurate are the prices?",
      answer: "We update prices multiple times daily to ensure accuracy. However, in-store prices can occasionally differ from online prices, and some sales may be store-specific. We clearly mark when a price was last verified."
    },
    {
      question: "Can I add my loyalty cards or coupons?",
      answer: "Yes! You can link your store loyalty accounts to see personalized prices with your discounts applied. You can also add digital coupons directly through our platform for additional savings."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Got questions about our price comparison tool? Find answers to common questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
