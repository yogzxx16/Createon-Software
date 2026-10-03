import sys

with open('src/pages/HomePage.tsx', 'r') as f:
    text = f.read()

# Add import
import_stmt = "import { ProcessShowcase } from '../components/ProcessShowcase';\n"
if "import { ProcessShowcase }" not in text:
    text = text.replace("import { HeroInteractiveVisual } from '../components/HeroInteractiveVisual';", 
                        "import { HeroInteractiveVisual } from '../components/HeroInteractiveVisual';\n" + import_stmt)

# Remove ProcessVisual component
s = text.split('const ProcessVisual: React.FC<{ progress: any }> = ({ progress }) => {')
if len(s) > 1:
    s2 = s[1].split('export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {')
    text = s[0] + 'export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {' + s2[1]

# Replace old section with new one
s = text.split('{/* 6. FROM IDEA TO LAUNCH (Sticky Process) */}')
if len(s) > 1:
    s2 = s[1].split('{/* 7. DIGITAL EXPERIENCE DEMONSTRATION */}')
    new_section = """{/* 6. FROM IDEA TO LAUNCH (Sticky Process) */}
      <ProcessShowcase />

      {/* 7. DIGITAL EXPERIENCE DEMONSTRATION */}"""
    text = s[0] + new_section + s2[1]

# Remove the unused processSectionRef and activeProcessIdx and useEffects
target1 = """  const [activeProcessIdx, setActiveProcessIdx] = useState(0);"""
text = text.replace(target1, "")

target2 = """  const processSectionRef = useRef<HTMLElement>(null);"""
text = text.replace(target2, "")

target3 = """  const mobileVisualRef = useRef<HTMLDivElement>(null);"""
text = text.replace(target3, "")

target4 = """  const { scrollYProgress: processProgress } = useScroll({
    target: processSectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = processProgress.on("change", (latest) => {
      if (latest < 0.25) setActiveProcessIdx(0);
      else if (latest < 0.50) setActiveProcessIdx(1);
      else if (latest < 0.75) setActiveProcessIdx(2);
      else setActiveProcessIdx(3);
    });
    return () => unsubscribe();
  }, [processProgress]);"""
text = text.replace(target4, "")

target5 = """  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileVisualRef,
    offset: ["start end", "end start"]
  });"""
text = text.replace(target5, "")

with open('src/pages/HomePage.tsx', 'w') as f:
    f.write(text)

print("done")
