# Strapi Setup Guide for Escuela Egon Keutmann Huiscapi

This guide explains how to set up and configure all the Strapi content types for the school website.

## 📋 Table of Contents

1. [Installation & Startup](#installation--startup)
2. [Content Types Overview](#content-types-overview)
3. [API Permissions Setup](#api-permissions-setup)
4. [Content Creation Guide](#content-creation-guide)
5. [Integration with Astro](#integration-with-astro)

---

## 🚀 Installation & Startup

### First Time Setup

```bash
# Navigate to Strapi project
cd "C:\Users\rrt_6\Desktop\claude_projects\egon-keutman\Strapi\strapi-cloud-template-blog-258f85d2c2"

# Install dependencies (if not already installed)
npm install

# Start Strapi in development mode
npm run develop
```

### Access Admin Panel

- URL: `http://localhost:1337/admin`
- Create your first admin user when prompted

---

## 📚 Content Types Overview

### Collection Types (Multiple Entries)

#### 1. **Article** (Extended Blog Post)
*Location:* `src/api/article/`

**Purpose:** School news and blog posts

**Fields:**
- `title` (String) - Article title
- `description` (Text, max 500) - Short description/excerpt
- `slug` (UID) - Auto-generated from title
- `cover` (Media) - Featured image
- `author` (Relation) - Link to Author
- `category` (Relation) - Link to Category
- `blocks` (Dynamic Zone) - Rich content (media, quotes, text, sliders)
- `publishDate` (Date) - **NEW** Publication date
- `readTime` (Integer) - **NEW** Estimated reading time in minutes
- `cardImageAlt` (String) - **NEW** Alt text for card image
- `language` (Enum: es, en) - **NEW** Article language
- `tags` (JSON) - **NEW** Array of tags

**Example API Response:**
```json
{
  "id": 1,
  "attributes": {
    "title": "Bienvenidos al Año Escolar 2024",
    "description": "Iniciamos un nuevo año...",
    "slug": "bienvenidos-ano-escolar-2024",
    "publishDate": "2024-03-01",
    "readTime": 3,
    "language": "es",
    "tags": ["bienvenida", "año escolar"],
    "cover": { ... },
    "author": { ... },
    "blocks": [ ... ]
  }
}
```

---

#### 2. **FAQ**
*Location:* `src/api/faq/`

**Purpose:** Frequently Asked Questions

**Fields:**
- `question` (String, required)
- `answer` (Text, required)
- `category` (Enum) - general, admision, academico, instalaciones, alimentacion, actividades
- `order` (Integer) - Display order
- `language` (Enum: es, en) - Question language

**Usage Example:**
```
Question: "¿Cuáles son los niveles educativos que ofrece la escuela?"
Answer: "La Escuela Egon Keutmann Huiscapi ofrece educación desde Pre-Kinder hasta 8° Básico..."
Category: general
Order: 1
```

---

#### 3. **Feature**
*Location:* `src/api/feature/`

**Purpose:** School educational pillars and key features

**Fields:**
- `heading` (String, required)
- `content` (Text, required)
- `icon` (Enum) - groups, verified, books, frame, tools, dashboard, house
- `order` (Integer) - Display order

**Icon Options:**
- `groups` - For community/collaboration features
- `verified` - For values/principles
- `books` - For academic features
- `frame` - For innovation features
- `tools` - For daily school life
- `dashboard` - For programs
- `house` - For activities

---

#### 4. **Feature Tab**
*Location:* `src/api/feature-tab/`

**Purpose:** Tabbed sections with images showcasing school life

**Fields:**
- `heading` (String, required)
- `content` (Text, required)
- `icon` (String, required) - Icon identifier
- `image` (Media, required) - Tab showcase image
- `imageAlt` (String, required) - Image alt text
- `order` (Integer) - Display order

**Example:**
```
Heading: "Vida Escolar Diaria"
Content: "Nuestros estudiantes viven una experiencia educativa..."
Icon: "tools"
Image: [Upload photo of students in classroom]
ImageAlt: "Estudiantes llegando felices a la escuela"
Order: 1
```

---

#### 5. **Testimonial**
*Location:* `src/api/testimonial/`

**Purpose:** Parent, teacher, and student testimonials

**Fields:**
- `content` (Text, required) - The testimonial quote
- `author` (String, required) - Person's name
- `role` (String, required) - Their role/title
- `avatar` (Media, required) - Profile photo
- `isActive` (Boolean) - Show/hide testimonial
- `order` (Integer) - Display order

**Tips:**
- Upload real photos of parents/teachers
- Keep testimonials authentic and specific
- Use `isActive` to rotate testimonials seasonally

---

#### 6. **Statistic**
*Location:* `src/api/statistic/`

**Purpose:** Key metrics and statistics

**Fields:**
- `count` (String, required) - The number/metric (e.g., "25+", "100%", "Integral")
- `description` (Text, required) - What the statistic represents
- `order` (Integer) - Display order

**Examples:**
```
Count: "25+"
Description: "años educando a la comunidad de Huiscapi"

Count: "Familias"
Description: "satisfechas que confían en nuestro proyecto educativo"
```

---

#### 7. **Announcement Banner**
*Location:* `src/api/announcement-banner/`

**Purpose:** Temporary announcement banners (admissions, events, alerts)

**Fields:**
- `title` (String) - Optional banner text
- `buttonText` (String, required) - CTA button text
- `url` (String, required) - Where button links to
- `isActive` (Boolean) - Show/hide banner
- `priority` (Integer) - Higher number = higher priority
- `startDate` (Date) - Optional start date
- `endDate` (Date) - Optional end date

**Use Cases:**
- Admissions announcements
- School closure alerts
- Event reminders
- Important deadlines

---

#### 8. **Partner**
*Location:* `src/api/partner/`

**Purpose:** Partner organizations and institutional affiliations

**Fields:**
- `name` (String, required) - Organization name
- `logo` (Media, required) - Organization logo
- `website` (String) - Organization URL
- `order` (Integer) - Display order

**Examples:**
- Ministerio de Educación
- JUNAEB
- Fundación Integra
- Municipalidad

---

### Single Types (Only One Entry)

#### 9. **Homepage Hero**
*Location:* `src/api/homepage-hero/`

**Purpose:** Main hero section on homepage

**Fields:**
- `title` (Rich Text, required) - Main headline (can include HTML for styling)
- `subtitle` (Text, required) - Supporting text
- `primaryButtonText` (String, required) - Main CTA text
- `primaryButtonURL` (String, required) - Main CTA link
- `secondaryButtonText` (String) - Optional second CTA
- `secondaryButtonURL` (String) - Optional second CTA link
- `heroImage` (Media, required) - Main hero image
- `heroImageAlt` (String, required) - Image alt text
- `ratingText` (Rich Text) - Review section rating text
- `reviewsText` (Rich Text) - Review section description
- `avatars` (Media, multiple) - Review section avatar images
- `showReviewSection` (Boolean) - Toggle review section
- `starCount` (Integer, 0-5) - Star rating display

**Example Title with HTML:**
```html
Formando el Futuro en <span class="text-orange-500 dark:text-orange-400">Huiscapi</span>
```

---

#### 10. **Features Section**
*Location:* `src/api/features-section/`

**Purpose:** The section that displays the features/pillars with a large image

**Fields:**
- `title` (String, required) - Section title
- `subtitle` (Text, required) - Section description
- `image` (Media, required) - Large showcase image
- `imageAlt` (String, required) - Image alt text

**Note:** The individual features are managed separately in the **Feature** collection type.

---

#### 11. **Global** (Pre-existing)
*Location:* `src/api/global/`

**Purpose:** Global site settings

**Fields:**
- `siteName` (String, required)
- `favicon` (Media)
- `siteDescription` (Text, required)
- `defaultSeo` (Component)

---

## 🔓 API Permissions Setup

### Critical: Enable Public Access

For the Astro site to fetch data, you must enable public read permissions:

1. Go to **Settings** → **Roles** → **Public**
2. For each content type, check these permissions:
   - ✅ `find` - List all entries
   - ✅ `findOne` - Get single entry

**Content Types to Enable:**
- Article
- Author
- Category
- FAQ
- Feature
- Feature Tab
- Testimonial
- Statistic
- Announcement Banner
- Partner
- Homepage Hero
- Features Section
- Global

3. **Save** changes

### API Endpoints

Once enabled, these endpoints will be available:

```
GET http://localhost:1337/api/articles?populate=*
GET http://localhost:1337/api/articles/:id?populate=*
GET http://localhost:1337/api/faqs
GET http://localhost:1337/api/features
GET http://localhost:1337/api/feature-tabs?populate=*
GET http://localhost:1337/api/testimonials?populate=*
GET http://localhost:1337/api/statistics
GET http://localhost:1337/api/announcement-banners
GET http://localhost:1337/api/partners?populate=*
GET http://localhost:1337/api/homepage-hero?populate=*
GET http://localhost:1337/api/features-section?populate=*
```

**Note:** Use `?populate=*` to include media files and relations in the response.

---

## 📝 Content Creation Guide

### Step 1: Create Authors

1. Go to **Content Manager** → **Author**
2. Click **Create new entry**
3. Fill in:
   - Name: "Dirección Académica"
   - Email: "direccion@escuelaegonkeutmann.edu.cl"
   - Role: "Equipo Directivo"
   - Avatar: Upload photo
4. **Save**

### Step 2: Create Categories

1. Go to **Content Manager** → **Category**
2. Create categories like:
   - Noticias
   - Eventos
   - Educación
   - Comunidad

### Step 3: Configure Homepage Hero

1. Go to **Content Manager** → **Homepage Hero** (Single Type)
2. Fill in all fields
3. Upload hero image (school photo)
4. Upload avatar images for review section
5. **Save** and **Publish**

### Step 4: Create Features

1. Go to **Content Manager** → **Feature**
2. Create 4 features (educational pillars):
   - Example: "Educación Integral" with icon "groups"
3. Set order: 1, 2, 3, 4
4. **Save** and **Publish** each

### Step 5: Configure Features Section

1. Go to **Content Manager** → **Features Section**
2. Set title and subtitle
3. Upload showcase image
4. **Save** and **Publish**

### Step 6: Create Feature Tabs

1. Go to **Content Manager** → **Feature Tab**
2. Create 3 tabs:
   - Vida Escolar Diaria (order: 1)
   - Programas Académicos (order: 2)
   - Actividades Complementarias (order: 3)
3. Upload real school photos for each
4. **Save** and **Publish**

### Step 7: Add FAQs

1. Go to **Content Manager** → **FAQ**
2. Create questions and answers
3. Assign categories
4. Set order for each
5. **Save** and **Publish**

### Step 8: Add Testimonials

1. Go to **Content Manager** → **Testimonial**
2. Add parent/teacher testimonials
3. Upload real photos
4. Mark as Active
5. **Save** and **Publish**

### Step 9: Create Blog Articles

1. Go to **Content Manager** → **Article**
2. Click **Create new entry**
3. Fill in all fields:
   - Title, description, cover image
   - Select author and category
   - Add content blocks (rich text, images, quotes)
   - Set publish date
   - Set read time (estimate)
   - Set language to "es"
   - Add tags as JSON array: `["tag1", "tag2"]`
4. **Save** and **Publish**

### Step 10: Add Partners

1. Go to **Content Manager** → **Partner**
2. Upload partner logos
3. Set website URLs
4. Set display order
5. **Save** and **Publish**

### Step 11: Create Announcement Banner (Optional)

1. Go to **Content Manager** → **Announcement Banner**
2. Create announcement
3. Set `isActive` to true
4. **Save** and **Publish**

---

## 🔗 Integration with Astro

### Environment Variables

In your Astro project, create `.env`:

```env
STRAPI_URL=http://localhost:1337
PUBLIC_STRAPI_URL=http://localhost:1337
```

### Fetching Data Example

```typescript
// In Astro component
const response = await fetch('http://localhost:1337/api/articles?populate=*&locale=es');
const { data } = await response.json();
```

### Image URLs

Strapi media URLs will be in this format:
```
http://localhost:1337/uploads/filename_abc123.jpg
```

---

## 🎨 Media Library Tips

### Organizing Uploads

Create folders in Strapi Media Library:
- `hero-images/`
- `blog-featured/`
- `testimonials/`
- `feature-tabs/`
- `partners/`
- `avatars/`

### Image Recommendations

- **Hero Image:** 2070x1200px minimum
- **Blog Card Images:** 1000x600px
- **Avatars:** 300x300px square
- **Feature Tab Images:** 2070x1200px
- **Partner Logos:** SVG or PNG with transparent background

---

## 🚀 Next Steps

1. ✅ Start Strapi: `npm run develop`
2. ✅ Access admin: `http://localhost:1337/admin`
3. ✅ Configure API permissions (Settings → Roles → Public)
4. ✅ Create initial content (authors, categories, etc.)
5. ✅ Test API endpoints in browser
6. ⏭️ **Next:** Integrate with Astro project (Phase 2)

---

## 📞 Support

If you need help:
- Strapi Docs: https://docs.strapi.io
- Strapi Discord: https://discord.strapi.io

---

**Created for:** Escuela Egon Keutmann Huiscapi
**Date:** 2025
**Strapi Version:** 5.15.0
