#!/bin/bash

# Script to reorganize Angular feature components into proper subfolders
# This follows Angular best practices for feature-based architecture

echo "Reorganizing Angular feature components..."

# Function to reorganize a feature
reorganize_feature() {
    local feature_name=$1
    local feature_path="src/app/features/$feature_name"
    
    echo "Reorganizing $feature_name feature..."
    
    # Create components directory
    mkdir -p "$feature_path/components"
    
    # Find all component files and move them to appropriate subfolders
    for component_file in "$feature_path"/*.component.ts; do
        if [ -f "$component_file" ]; then
            # Extract component name from filename
            component_name=$(basename "$component_file" .component.ts)
            
            # Create component subfolder
            mkdir -p "$feature_path/components/$component_name"
            
            # Move all files for this component
            mv "$feature_path/$component_name.component."* "$feature_path/components/$component_name/" 2>/dev/null || true
            
            echo "  Moved $component_name component to components/$component_name/"
        fi
    done
    
    echo "  ✓ $feature_name feature reorganized"
}

# Reorganize remaining features
reorganize_feature "owner"
reorganize_feature "catalog"
reorganize_feature "treatment"
reorganize_feature "settings"
reorganize_feature "reporting"

echo "Feature reorganization complete!"
echo ""
echo "Next steps:"
echo "1. Update import paths in module files"
echo "2. Update import paths in routing files"
echo "3. Create .routes.ts files for standalone routing"
echo "4. Test the application to ensure everything works" 