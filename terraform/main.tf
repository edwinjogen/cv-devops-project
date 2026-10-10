terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 4.8"
    }
  }
}

resource "vercel_project" "devops-project" {
  name      = var.project_name
  framework = "nextjs"
  # team_id   = var.team_id
  git_repository = {
    type = "github"
    repo = var.github_repository
  }
}
