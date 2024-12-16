import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function App() {
  // Regular expression pattern
  const pattern = /^(a|b)((a|b)(a|b))*$/;
  
  // State to manage input and validation results
  const [input, setInput] = useState('');
  const [validationResult, setValidationResult] = useState('');
  
  // Function to check if the string is valid
  const isValid = (testString) => {
    // First, check if the string matches the pattern
    if (!pattern.test(testString)) {
      return false;
    }
    
    // Then count the number of characters
    const totalCharacters = testString.length;
    
    // Return true if total characters is odd
    return totalCharacters % 2 === 1;
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    
    // Validate input
    if (newInput === '') {
      setValidationResult('');
    } else if (isValid(newInput)) {
      setValidationResult('Valid input (Odd number of characters)');
    } else {
      setValidationResult('Invalid input');
    }
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Regex Validator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="regex-input">Enter String</Label>
              <Input 
                id="regex-input"
                type="text" 
                value={input}
                onChange={handleInputChange}
                placeholder="Enter a string with a/b"
                className="mt-2"
              />
            </div>
            
            {validationResult && (
              <div 
                className={`p-2 rounded ${
                  validationResult.includes('Valid') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {validationResult}
              </div>
            )}
            
            <div className="text-sm text-gray-600">
              <h3 className="font-semibold">Validation Rules:</h3>
              <ul className="list-disc list-inside">
                <li>Only use characters 'a' and 'b'</li>
                <li>Must have an odd number of total characters</li>
                <li>Pattern must follow: (a|b)((a|b)(a|b))*</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;