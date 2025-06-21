#!/bin/bash

# Function to reorganize a feature module
reorganize_feature() {
    local feature=$1
    local feature_dir="src/app/features/$feature"
    
    # Create directory structure
    mkdir -p "$feature_dir/components"
    mkdir -p "$feature_dir/services"
    mkdir -p "$feature_dir/models"
    
    # Move component files
    for component in $(find "$feature_dir" -maxdepth 1 -name "*.component.*"); do
        component_name=$(basename "$component" | cut -d. -f1)
        mkdir -p "$feature_dir/components/$component_name"
        mv "$feature_dir/$component_name.component."* "$feature_dir/components/$component_name/"
    done
    
    # Move service files
    for service in $(find "$feature_dir" -maxdepth 1 -name "*.service.*"); do
        service_name=$(basename "$service" | cut -d. -f1)
        mv "$feature_dir/$service_name.service."* "$feature_dir/services/"
    done
    
    # Move model files
    for model in $(find "$feature_dir" -maxdepth 1 -name "*.model.*"); do
        model_name=$(basename "$model" | cut -d. -f1)
        mv "$feature_dir/$model_name.model."* "$feature_dir/models/"
    done
}

# List of feature modules
features=("user-management" "owner" "dashboard" "treatment" "settings" "reporting" "catalog" "billing" "animal")

# Reorganize each feature module
for feature in "${features[@]}"; do
    echo "Reorganizing $feature module..."
    reorganize_feature "$feature"
done

echo "Reorganization complete!" 