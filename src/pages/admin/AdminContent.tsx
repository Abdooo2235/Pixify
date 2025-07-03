import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Save, Edit, Eye } from 'lucide-react';

interface ContentSection {
  id: string;
  title: string;
  content: string;
  lastModified: string;
}

const AdminContent = () => {
  const [heroContent, setHeroContent] = useState({
    title: 'Upscale & Enhance Your Images with AI',
    subtitle: 'Transform your images in seconds with our AI-powered upscaling technology. Get crisp, high-resolution results with zero quality loss.'
  });

  const [pricingPlans, setPricingPlans] = useState([
    {
      id: '1',
      name: 'Free',
      price: '$0',
      description: 'Basic upscaling features',
      features: ['5 images per month', '2x upscaling', 'Basic quality']
    },
    {
      id: '2',
      name: 'Pro',
      price: '$19',
      description: 'Advanced features for professionals',
      features: ['500 images per month', 'Up to 8x upscaling', 'Premium quality']
    },
    {
      id: '3',
      name: 'Enterprise',
      price: 'Custom',
      description: 'Custom solutions for businesses',
      features: ['Unlimited images', 'API access', 'Priority support']
    }
  ]);

  const [examples, setExamples] = useState([
    {
      id: '1',
      title: 'Photo Enhancement',
      description: 'Professional photo upscaling',
      beforeImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop'
    }
  ]);

  const handleSaveHero = () => {
    // Simulate saving hero content
    console.log('Hero content saved:', heroContent);
  };

  const handleSavePricing = () => {
    // Simulate saving pricing plans
    console.log('Pricing plans saved:', pricingPlans);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Manage Content</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Edit and manage content displayed on your landing page
        </p>
      </div>

      <Tabs defaultValue="hero" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Hero Section Content</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                Update the main headline and subtitle on your landing page
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-900 dark:text-white">Main Title</label>
                <Input
                  value={heroContent.title}
                  onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-900 dark:text-white">Subtitle</label>
                <Textarea
                  value={heroContent.subtitle}
                  onChange={(e) => setHeroContent({ ...heroContent, subtitle: e.target.value })}
                  rows={3}
                  className="mt-1"
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleSaveHero} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
                <Button variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Pricing Plans</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                Manage your pricing plans and features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, index) => (
                  <div key={plan.id} className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                    <div className="space-y-3">
                      <Input
                        value={plan.name}
                        onChange={(e) => {
                          const updated = [...pricingPlans];
                          updated[index].name = e.target.value;
                          setPricingPlans(updated);
                        }}
                        className="font-semibold"
                      />
                      <Input
                        value={plan.price}
                        onChange={(e) => {
                          const updated = [...pricingPlans];
                          updated[index].price = e.target.value;
                          setPricingPlans(updated);
                        }}
                        className="text-2xl font-bold"
                      />
                      <Textarea
                        value={plan.description}
                        onChange={(e) => {
                          const updated = [...pricingPlans];
                          updated[index].description = e.target.value;
                          setPricingPlans(updated);
                        }}
                        rows={2}
                      />
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-white">Features</label>
                        {plan.features.map((feature, featureIndex) => (
                          <Input
                            key={featureIndex}
                            value={feature}
                            onChange={(e) => {
                              const updated = [...pricingPlans];
                              updated[index].features[featureIndex] = e.target.value;
                              setPricingPlans(updated);
                            }}
                            className="text-sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button onClick={handleSavePricing} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Save className="mr-2 h-4 w-4" />
                  Save Pricing Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Example Images</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                Manage the before/after example images shown on your site
              </CardDescription>
            </CardHeader>
            <CardContent>
              {examples.map((example, index) => (
                <div key={example.id} className="border border-slate-200 dark:border-slate-600 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-900 dark:text-white">Title</label>
                      <Input
                        value={example.title}
                        onChange={(e) => {
                          const updated = [...examples];
                          updated[index].title = e.target.value;
                          setExamples(updated);
                        }}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-900 dark:text-white">Description</label>
                      <Input
                        value={example.description}
                        onChange={(e) => {
                          const updated = [...examples];
                          updated[index].description = e.target.value;
                          setExamples(updated);
                        }}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-900 dark:text-white">Before Image URL</label>
                      <Input
                        value={example.beforeImage}
                        onChange={(e) => {
                          const updated = [...examples];
                          updated[index].beforeImage = e.target.value;
                          setExamples(updated);
                        }}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-900 dark:text-white">After Image URL</label>
                      <Input
                        value={example.afterImage}
                        onChange={(e) => {
                          const updated = [...examples];
                          updated[index].afterImage = e.target.value;
                          setExamples(updated);
                        }}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Save className="mr-2 h-4 w-4" />
                Save Examples
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="footer" className="space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Footer Content</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                Update footer links and information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-900 dark:text-white">Copyright Text</label>
                  <Input
                    defaultValue="© 2024 Pixify. All rights reserved."
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-900 dark:text-white">Contact Email</label>
                  <Input
                    defaultValue="contact@pixify.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-900 dark:text-white">Support URL</label>
                  <Input
                    defaultValue="https://support.pixify.com"
                    className="mt-1"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Save className="mr-2 h-4 w-4" />
                  Save Footer
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminContent;