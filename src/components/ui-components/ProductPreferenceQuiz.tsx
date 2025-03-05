import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Checkbox } from '../ui/checkbox';
import { Apple, ShoppingCart } from 'lucide-react';

const options = [
  "Organic",
  "Non-GMO",
  "Gluten-Free",
  "Vegan",
  "Sustainable Packaging",
  "Local",
  "Fair Trade"
];

const ProductPreferenceQuiz = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [preferences, setPreferences] = useState<string[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handlePreferenceChange = (option: string) => {
    setPreferences((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleSubmit = () => {
    alert(
      `Name: ${name}, Category: ${category}, Preferences: ${preferences.join(', ')}`
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Preferences</CardTitle>
        <CardDescription>
          Tell us about your product preferences to find the best matches.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            placeholder="Enter product name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="Fruits"><Apple className="mr-2 h-4 w-4" /> Fruits</SelectItem>
                <SelectItem value="Vegetables">Vegetables</SelectItem>
                <SelectItem value="Dairy">Dairy</SelectItem>
                <SelectItem value="Snacks">Snacks</SelectItem>
                <SelectItem value="Beverages">Beverages</SelectItem>
                {/* Add more categories as needed */}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Separator />
        <div className="grid gap-2">
          <Label>Preferences</Label>
          <div className="flex flex-col space-y-2">
            {options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={preferences.includes(option)}
                  onCheckedChange={() => handlePreferenceChange(option)}
                />
                <Label htmlFor={option} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSubmit}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Find Products
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductPreferenceQuiz;
