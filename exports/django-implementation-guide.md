# Django Implementation Guide for Shop Helper Frontend

This guide will help you implement the HTML/CSS design into a Django project.

## Project Setup

1. **Create a new Django project** (if you haven't already):
   ```bash
   django-admin startproject shophelper
   cd shophelper
   python manage.py startapp core
   ```

2. **Add the app to settings.py**:
   ```python
   INSTALLED_APPS = [
       # Default Django apps
       'django.contrib.admin',
       'django.contrib.auth',
       'django.contrib.contenttypes',
       'django.contrib.sessions',
       'django.contrib.messages',
       'django.contrib.staticfiles',
       
       # Your app
       'core',
   ]
   ```

3. **Configure static files**:
   ```python
   # settings.py
   STATIC_URL = '/static/'
   STATICFILES_DIRS = [
       BASE_DIR / "static",
   ]
   STATIC_ROOT = BASE_DIR / "staticfiles"
   ```

4. **Create the static directory structure**:
   ```
   static/
   ├── css/
   │   └── styles.css
   └── images/
   ```

5. **Copy the CSS file** from `exports/styles.css` to `static/css/styles.css`.

## Templates Structure

1. **Create templates directory**:
   ```
   templates/
   ├── base.html
   ├── index.html
   ├── shopping_list.html
   ├── price_comparison.html
   ├── login.html
   └── signup.html
   ```

2. **Create base.html template**:
   ```html
   {% load static %}
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>{% block title %}Smrt Mkt{% endblock %}</title>
     <link rel="stylesheet" href="{% static 'css/styles.css' %}">
     {% block extra_css %}{% endblock %}
   </head>
   <body>
     <!-- Navbar -->
     <header class="navbar">
       <div class="container">
         <div class="navbar-content">
           <a href="{% url 'index' %}" class="logo">
             <div class="logo-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="logo-svg">
                 <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                 <path d="M3 6h18" />
                 <path d="M16 10a4 4 0 0 1-8 0" />
               </svg>
             </div>
             <span class="logo-text">Smrt Mkt</span>
           </a>
           
           <nav class="navbar-nav">
             <a href="#how-it-works" class="nav-link">How It Works</a>
             <a href="#features" class="nav-link">Features</a>
             <a href="#faq" class="nav-link">FAQ</a>
             {% if request.path != '/' %}
               <a href="{% url 'shopping_list' %}" class="nav-link{% if request.path == '/shopping-list/' %} active{% endif %}">My List</a>
             {% endif %}
           </nav>
           
           <div class="navbar-actions">
             <a href="{% url 'login' %}" class="btn btn-outline">Sign In</a>
             <a href="{% url 'signup' %}" class="btn btn-primary">Get Started</a>
           </div>
         </div>
       </div>
     </header>

     {% block content %}{% endblock %}
     
     <!-- Footer -->
     <footer class="footer">
       <div class="container">
         <div class="footer-content">
           <div class="footer-brand">
             <a href="{% url 'index' %}" class="footer-logo">
               <div class="logo-icon">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="logo-svg">
                   <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                   <path d="M3 6h18" />
                   <path d="M16 10a4 4 0 0 1-8 0" />
                 </svg>
               </div>
               <span class="logo-text">Smrt Mkt</span>
             </a>
             <p class="footer-tagline">Saving you time and money on every shopping trip.</p>
           </div>
           
           <div class="footer-links">
             <div class="footer-column">
               <h4 class="footer-title">Product</h4>
               <ul class="footer-menu">
                 <li><a href="#features">Features</a></li>
                 <li><a href="#how-it-works">How It Works</a></li>
                 <li><a href="#pricing">Pricing</a></li>
               </ul>
             </div>
             
             <div class="footer-column">
               <h4 class="footer-title">Company</h4>
               <ul class="footer-menu">
                 <li><a href="#">About Us</a></li>
                 <li><a href="#">Careers</a></li>
                 <li><a href="#">Contact</a></li>
               </ul>
             </div>
             
             <div class="footer-column">
               <h4 class="footer-title">Resources</h4>
               <ul class="footer-menu">
                 <li><a href="#">Blog</a></li>
                 <li><a href="#">Support</a></li>
                 <li><a href="#">Privacy</a></li>
               </ul>
             </div>
           </div>
         </div>
         
         <div class="footer-bottom">
           <p class="copyright">© {% now "Y" %} Smrt Mkt. All rights reserved.</p>
           <div class="social-links">
             <a href="#" class="social-link">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
               </svg>
             </a>
             <a href="#" class="social-link">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                 <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
               </svg>
             </a>
             <a href="#" class="social-link">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
               </svg>
             </a>
           </div>
         </div>
       </div>
     </footer>
     
     {% block extra_js %}{% endblock %}
   </body>
   </html>
   ```

3. **Create specific page templates** by extending base.html and adapting the HTML from the export files.

## Views and URLs

1. **Define views in views.py**:
   ```python
   # core/views.py
   from django.shortcuts import render

   def index(request):
       return render(request, 'index.html')

   def shopping_list(request):
       return render(request, 'shopping_list.html')

   def price_comparison(request):
       return render(request, 'price_comparison.html')

   def login_view(request):
       return render(request, 'login.html')

   def signup_view(request):
       return render(request, 'signup.html')
   ```

2. **Configure URLs**:
   ```python
   # shophelper/urls.py
   from django.contrib import admin
   from django.urls import path
   from core import views

   urlpatterns = [
       path('admin/', admin.site.urls),
       path('', views.index, name='index'),
       path('shopping-list/', views.shopping_list, name='shopping_list'),
       path('price-comparison/', views.price_comparison, name='price_comparison'),
       path('login/', views.login_view, name='login'),
       path('signup/', views.signup_view, name='signup'),
   ]
   ```

## Adapting HTML to Django Templates

For each page, create a template that extends the base template. Here's an example for the index page:

```html
{% extends 'base.html' %}

{% block title %}Smrt Mkt - Smart Shopping Made Simple{% endblock %}

{% block content %}
<main>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <!-- Hero text -->
        <div class="hero-text">
          <div class="hero-badge">Smart shopping made simple</div>
          <h1 class="hero-title">Compare prices across all your favorite stores</h1>
          <p class="hero-description">Our algorithm finds the best deals for your shopping list, saving you time and money.</p>
          
          <div class="hero-buttons">
            <a href="/shopping-list" class="btn btn-primary btn-lg">
              Build My First List
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a href="#how-it-works" class="btn btn-outline btn-lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              See How It Works
            </a>
          </div>
          
          <p class="hero-security">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="security-icon">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Secure, private, and built for shoppers like you
          </p>
        </div>
        
        <!-- Demo Windows -->
        <div class="demo-windows">
          <!-- Shopping List Demo -->
          <div class="demo-window">
            <div class="shopping-list">
              <div class="shopping-list-header">
                <h3>My Shopping List</h3>
                <div class="shopping-list-actions">
                  <button class="btn btn-sm btn-outline">Save List</button>
                  <a href="/price-comparison" class="btn btn-sm btn-primary">See My Savings</a>
                </div>
              </div>
              
              <div class="shopping-list-categories">
                <div class="category-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="category-icon">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  <span>Categories</span>
                </div>
                
                <div class="category">
                  <div class="category-name">Dairy</div>
                  <ul class="item-list">
                    <li class="item">Milk (1 gallon)</li>
                    <li class="item">Greek Yogurt</li>
                    <li class="item">Butter (unsalted)</li>
                  </ul>
                </div>
                
                <div class="category">
                  <div class="category-name">Produce</div>
                  <ul class="item-list">
                    <li class="item">Apples</li>
                    <li class="item">Bananas</li>
                    <li class="item">Spinach</li>
                  </ul>
                </div>
                
                <div class="category">
                  <div class="category-name">Meat</div>
                  <ul class="item-list">
                    <li class="item">Chicken Breast</li>
                    <li class="item">Ground Beef</li>
                    <li class="item add-item">
                      <button class="btn btn-ghost btn-add">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="add-icon">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add Item...
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Store Comparison Demo -->
          <div class="demo-window">
            <div class="store-comparison">
              <div class="store-comparison-header">
                <h3>Price Comparison</h3>
                <p>Save $12.47 by shopping at multiple stores</p>
              </div>
              
              <div class="stores-list">
                <div class="store">
                  <div class="store-info">
                    <div class="store-logo">
                      <span>W</span>
                    </div>
                    <div class="store-details">
                      <h4>Wegmans</h4>
                      <span class="store-items">5 items</span>
                    </div>
                  </div>
                  <div class="store-price">$28.45</div>
                </div>
                
                <div class="store best-store">
                  <div class="store-info">
                    <div class="store-logo">
                      <span>A</span>
                    </div>
                    <div class="store-details">
                      <h4>Aldi</h4>
                      <span class="store-items">8 items</span>
                    </div>
                  </div>
                  <div class="store-price">$24.12</div>
                </div>
                
                <div class="store">
                  <div class="store-info">
                    <div class="store-logo">
                      <span>T</span>
                    </div>
                    <div class="store-details">
                      <h4>Target</h4>
                      <span class="store-items">3 items</span>
                    </div>
                  </div>
                  <div class="store-price">$31.99</div>
                </div>
                
                <div class="store">
                  <div class="store-info">
                    <div class="store-logo">
                      <span>K</span>
                    </div>
                    <div class="store-details">
                      <h4>Kroger</h4>
                      <span class="store-items">4 items</span>
                    </div>
                  </div>
                  <div class="store-price">$27.85</div>
                </div>
              </div>
              
              <div class="comparison-actions">
                <button class="btn btn-outline">View All Items</button>
                <button class="btn btn-primary">Optimize Shopping</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Other sections -->
</main>
{% endblock %}
```

## Dynamic Data

For dynamic data like shopping lists and store comparisons:

1. **Create models**:
   ```python
   # core/models.py
   from django.db import models
   from django.contrib.auth.models import User

   class Category(models.Model):
       name = models.CharField(max_length=100)
       
       def __str__(self):
           return self.name

   class Item(models.Model):
       name = models.CharField(max_length=200)
       category = models.ForeignKey(Category, on_delete=models.CASCADE)
       user = models.ForeignKey(User, on_delete=models.CASCADE)
       
       def __str__(self):
           return self.name

   class Store(models.Model):
       name = models.CharField(max_length=100)
       logo_letter = models.CharField(max_length=1)
       
       def __str__(self):
           return self.name

   class Price(models.Model):
       item = models.ForeignKey(Item, on_delete=models.CASCADE)
       store = models.ForeignKey(Store, on_delete=models.CASCADE)
       price = models.DecimalField(max_digits=6, decimal_places=2)
       
       class Meta:
           unique_together = ('item', 'store')
   ```

2. **Update views to include data**:
   ```python
   def shopping_list(request):
       if request.user.is_authenticated:
           categories = Category.objects.prefetch_related(
               models.Prefetch(
                   'item_set',
                   queryset=Item.objects.filter(user=request.user)
               )
           ).all()
       else:
           # Demo data for non-authenticated users
           categories = [
               {'name': 'Dairy', 'items': [
                   {'name': 'Milk (1 gallon)'},
                   {'name': 'Greek Yogurt'},
                   {'name': 'Butter (unsalted)'},
               ]},
               {'name': 'Produce', 'items': [
                   {'name': 'Apples'},
                   {'name': 'Bananas'},
                   {'name': 'Spinach'},
               ]},
               {'name': 'Meat', 'items': [
                   {'name': 'Chicken Breast'},
                   {'name': 'Ground Beef'},
               ]},
           ]
       
       return render(request, 'shopping_list.html', {'categories': categories})
   ```

3. **Update templates to use dynamic data**:
   ```html
   {% for category in categories %}
   <div class="category">
     <div class="category-name">{{ category.name }}</div>
     <ul class="item-list">
       {% for item in category.items %}
       <li class="item">{{ item.name }}</li>
       {% endfor %}
       {% if forloop.last %}
       <li class="item add-item">
         <button class="btn btn-ghost btn-add">
           <svg ... ></svg>
           Add Item...
         </button>
       </li>
       {% endif %}
     </ul>
   </div>
   {% endfor %}
   ```

## Forms

For login, signup, and adding items, you'll need Django forms:

```python
# core/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Item, Category

class SignUpForm(UserCreationForm):
    email = forms.EmailField(required=True)
    
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

class AddItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ['name', 'category']
```

Then update your views to use these forms.

## AJAX Integration

For features like adding items without page reload:

```javascript
// Add to a static/js/shopping_list.js file
document.addEventListener('DOMContentLoaded', function() {
    const addItemBtn = document.querySelector('.btn-add');
    addItemBtn.addEventListener('click', function() {
        // Show a form or modal for adding an item
    });
    
    // Form submission with fetch API
    document.querySelector('#add-item-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        fetch('/add-item/', {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': getCookie('csrftoken')
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Update the UI
            }
        });
    });
    
    // CSRF token helper
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});
```

## Final Steps

1. **Run migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

2. **Create a superuser**:
   ```bash
   python manage.py createsuperuser
   ```

3. **Run the development server**:
   ```bash
   python manage.py runserver
   ```

This guide covers the basics of implementing the HTML/CSS design in Django. You'll need to adapt it to fit your specific requirements and add functionality as needed.
