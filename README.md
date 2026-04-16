Tech Stack Used
Next.js (App Router)
TypeScript
Ant Design (UI components)
TanStack Table (table structure)
React Hooks (useState, useMemo, useEffect)

Features Implemented :

Inventory Dashboard :
Displays 50,000+ records
Search functionality (debounced)
Pagination (to handle large data efficiently)
Clean table UI using TanStack Table
Actions menu (View / Edit / Delete)

Detail Page :
Click on "View" to navigate to detail page
Implemented using Next.js Server Component

UI Enhancements :
Status color coding (Active / Inactive)
Type color tags (Type A, B, C)
Ant Design components for consistent UI

Loading State :
Skeleton loading using Ant Design
Smooth loading experience

Performance Optimizations :
Pagination used to limit DOM rendering (only 50 rows at a time)
Debounced search to reduce unnecessary filtering
useMemo used to avoid expensive recalculations
Columns memoized to prevent re-renders
Avoided rendering full dataset in UI

Accessibility :
Semantic structure used
Keyboard navigation supported
Accessible labels added where needed

Key Decisions :
Used pagination instead of full rendering to avoid UI freezing
Used TanStack Table for flexible and scalable table structure
Used Ant Design for faster UI development and consistency
Avoided overusing global state (Redux) since not required
