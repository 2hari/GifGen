# GifGen

AI SaaS to generate GIFs. Users get 5 free generation after which they have to upgrade to pro plan to buy more credits. 

## 📺 Demo Video

https://github.com/2hari/GifGen/assets/73457568/a5e1e807-f505-4663-a93a-8f2ac6dbf40a

## 💡 Features

- Sentence to 3 Second gif in just one click
- AI model hosted on Replicate
- Generation Credits limit with Stripe
- Google OAuth

## 🔨 Built With

- Next.js (React)
- Typescript
- Replicate
- Clerk (Google OAuth)
- Stripe
- PostgreSQL
- Prisma
- Tailwind CSS
- Radix UI
- Zod (input validation)
- React Hot Toast
- vercel (deployment)

### UPDATE :

The project can't be used on vercel. Vercel Limits backend endpoints to max 5 seconds of Execution time. The model deployed on Replicate takes 45+ seconds to generate output, so the serverless function times out. You can try running this app locally or it needs to be hosted on a dedicated VPC.
