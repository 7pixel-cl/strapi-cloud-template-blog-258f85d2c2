# 🚀 Quick Start Guide

## Phase 1: Strapi Setup (Complete ✅)

All content types have been created. You're ready to start Strapi!

---

## Phase 2: Start & Configure Strapi

### Step 1: Start Strapi

```bash
cd "C:\Users\rrt_6\Desktop\claude_projects\egon-keutman\Strapi\strapi-cloud-template-blog-258f85d2c2"
npm run develop
```

### Step 2: Access Admin Panel

Open browser: `http://localhost:1337/admin`

- Create your admin account if first time
- Or login with existing credentials

### Step 3: Configure API Permissions ⚠️ CRITICAL

1. Go to **Settings** (gear icon in sidebar)
2. Click **Roles** under "USERS & PERMISSIONS PLUGIN"
3. Click **Public** role
4. Scroll down to permissions
5. For **each** content type below, check both boxes:
   - ✅ `find`
   - ✅ `findOne`

**Content types to enable:**
- Article
- Author
- Category
- FAQ
- Feature
- Feature-tab
- Testimonial
- Statistic
- Announcement-banner
- Partner
- Homepage-hero
- Features-section
- Global

6. Click **Save** (top right)

### Step 4: Test API Access

Open browser: `http://localhost:1337/api/articles`

You should see JSON response (empty array is OK at this point):
```json
{
  "data": [],
  "meta": { ... }
}
```

If you see an error, go back and check permissions.

---

## Phase 3: Add Content

### Quick Test Content

Create one piece of content to test:

1. Go to **Content Manager** (in sidebar)
2. Click **Homepage Hero** (under Single Types)
3. Fill in:
   - Title: `Test Hero Title`
   - Subtitle: `This is a test subtitle`
   - Primary Button Text: `Learn More`
   - Primary Button URL: `/nosotros`
   - Upload a test image for Hero Image
   - Hero Image Alt: `Test image`
4. Click **Save** then **Publish**

### Verify It Works

Open: `http://localhost:1337/api/homepage-hero?populate=*`

You should see your content in JSON format.

---

## Phase 4: Populate Content (Optional Now)

You can either:

**Option A:** Add content manually through Strapi admin panel
- Follow [SETUP-GUIDE.md](SETUP-GUIDE.md) for detailed instructions

**Option B:** Wait until Astro integration is complete
- Add real content after testing the full pipeline

---

## Phase 5: Next Steps - Astro Integration

Once Strapi is running with test content:

### What needs to happen in Astro project:

1. **Create Strapi API utilities** (`src/utils/strapi.ts`)
   - Fetch functions for each content type
   - Handle Strapi response format
   - Transform data to match current structure

2. **Update environment config**
   - Add `.env` with `STRAPI_URL=http://localhost:1337`
   - Update `astro.config.mjs` image domains

3. **Update pages to use Strapi**
   - `src/pages/index.astro` - Homepage
   - `src/pages/noticias.astro` - News page
   - `src/pages/blog/[...slug].astro` - Individual posts

4. **Test build process**
   - Ensure static generation works with Strapi data

---

## 🔍 Troubleshooting

### Strapi won't start
```bash
# Try clean install
rm -rf node_modules package-lock.json
npm install
npm run develop
```

### Can't access admin panel
- Check Strapi is running (look for message: "Server started on http://localhost:1337")
- Try different browser
- Clear browser cache

### API returns 403 Forbidden
- Check API permissions (Step 3 above)
- Make sure you clicked Save

### API returns 404
- Check Strapi is running
- Verify URL spelling
- Check content type name in URL

---

## 📂 Project Structure

```
Strapi/strapi-cloud-template-blog-258f85d2c2/
├── src/api/           # ✅ All content types created here
├── public/uploads/    # Media uploads will go here
├── data/             # SQLite database
├── SETUP-GUIDE.md    # 📖 Detailed documentation
├── CONTENT-TYPES-SUMMARY.md  # 📋 Content types overview
├── QUICK-START.md    # 🚀 This file
└── package.json
```

---

## ✅ Current Status

- ✅ Phase 1 Complete: All Strapi content types created
- ⏳ Phase 2 In Progress: Start Strapi and configure permissions
- ⏭️ Phase 3 Next: Astro integration

---

## 📞 Need Help?

- **Detailed Setup**: See [SETUP-GUIDE.md](SETUP-GUIDE.md)
- **Content Types Info**: See [CONTENT-TYPES-SUMMARY.md](CONTENT-TYPES-SUMMARY.md)
- **Strapi Docs**: https://docs.strapi.io

---

## 🎯 Quick Command Reference

```bash
# Start Strapi
npm run develop

# Build for production
npm run build

# Start production server
npm run start

# Run seed script (if you create one)
npm run seed:example
```

---

**Ready?** Run `npm run develop` and let's go! 🚀
