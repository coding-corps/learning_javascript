# Define directories for backend
BACKEND_DIRS = \
    backend/src/config \
    backend/src/controllers \
    backend/src/models \
    backend/src/routes \
    backend/src/middleware \
    backend/src/services \
    backend/src/utils

# Define directories for frontend
FRONTEND_DIRS = \
    frontend/src/components \
    frontend/src/pages \
    frontend/src/hooks \
    frontend/src/services \
    frontend/public

# Rule to create the full directory structure
create-structure:
	@echo "Creating backend directories..."
	@mkdir -p $(BACKEND_DIRS)
	@touch backend/src/app.js backend/src/server.js
	@touch backend/package.json backend/.env
	@echo "Backend structure created."
	@echo "Creating frontend directories..."
	@mkdir -p $(FRONTEND_DIRS)
	@touch frontend/src/App.js frontend/src/index.js
	@touch frontend/package.json frontend/.env
	@echo "Frontend structure created."

# Rule to clean the project (delete created files and directories)
clean:
	@echo "Removing project directories..."
	@rm -rf backend frontend
	@echo "Project directories removed."
