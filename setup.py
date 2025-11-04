import os

# simple project structure definition
structure = {
    "public": ["resume.pdf", "preview.png"],
    "src": {
        "styles": ["tailwind.css"],
        "context": ["ThemeContext.jsx", "MotionContext.jsx"],
        "hooks": ["useReducedMotionSafe.js"],
        "data": ["projects.js"],
        "components": [
            "Navbar.jsx", "Hero.jsx", "About.jsx", "Skills.jsx",
            "Projects.jsx", "ContactPanel.jsx", "Footer.jsx",
            "FirmwareGridBackground.jsx", "GlowEffect.jsx",
            "FadeInSection.jsx", "MotionStatusIndicator.jsx",
            "ThemeStatusIndicator.jsx", "SystemStatusStack.jsx"
        ],
        "pages": ["CaseStudyBLE.jsx", "CaseStudyIoT.jsx"],
        "": ["main.jsx", "App.jsx"]
    },
    "": [
        "package.json",
        "vite.config.js",
        "tailwind.config.cjs",
        "postcss.config.cjs",
        "index.html"
    ]
}

def create_structure(base_path, data):
    for name, contents in data.items():
        current_path = os.path.join(base_path, name) if name else base_path
        if not os.path.exists(current_path):
            os.makedirs(current_path, exist_ok=True)
            print(f"[dir]  {current_path}")

        if isinstance(contents, list):
            for file_name in contents:
                file_path = os.path.join(current_path, file_name)
                with open(file_path, "w") as f:
                    f.write("")  # placeholder file
                print(f"[file] {file_path}")
        elif isinstance(contents, dict):
            create_structure(current_path, contents)

if __name__ == "__main__":
    cwd = os.getcwd()
    print(f"Creating project structure in: {cwd}\n")
    create_structure(cwd, structure)
    print("\n✅ All files and folders created.")
    print("Now you can run your git commands manually if needed.")
