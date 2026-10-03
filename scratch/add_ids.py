with open('src/pages/HomePage.tsx', 'r') as f:
    text = f.read()

# Add section IDs to key sections
text = text.replace(
    '<section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-20 pb-20 lg:pb-32 flex items-center min-h-[90vh]">',
    '<section id="hero" className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-20 pb-20 lg:pb-32 flex items-center min-h-[90vh]">'
)

# About section
text = text.replace(
    'ABOUT CREATEON\n            </span>\n          </div>',
    'ABOUT CREATEON\n            </span>\n          </div>', 
)

# We look for specific section markers by content
import re

# About section - find the first section after hero
about_marker = 'className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">'
# Replace only the first occurrence (about)
text = text.replace(about_marker, 'id="about" ' + about_marker, 1)

# Services section - this will be 2nd occurrence
# Find "WHAT WE BUILD" or services related content
text = text.replace(
    'id="about" className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">',
    'id="about" className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">'
)

# Process section — ProcessShowcase already has id="process"

# Experience section — find "BUILT FOR THE SCREEN"
text = text.replace(
    'className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">',
    'id="experience" className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">',
    1  # replace next remaining occurrence
)

# Final CTA
text = text.replace(
    'className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pb-24 lg:pb-32 text-center">',
    'id="cta" className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pb-24 lg:pb-32 text-center">'
)

with open('src/pages/HomePage.tsx', 'w') as f:
    f.write(text)

print("done")
