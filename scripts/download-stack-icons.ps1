$ErrorActionPreference = "Stop"
$dest = Join-Path $PSScriptRoot "..\src\assets\icons"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

# name -> iconify "set:icon"
$icons = [ordered]@{
  "html5"             = "simple-icons:html5"
  "css3"              = "simple-icons:css3"
  "javascript"        = "simple-icons:javascript"
  "typescript"        = "simple-icons:typescript"
  "react"             = "simple-icons:react"
  "tailwindcss"       = "simple-icons:tailwindcss"
  "bootstrap"         = "simple-icons:bootstrap"
  "nextdotjs"         = "simple-icons:nextdotjs"
  "nodedotjs"         = "simple-icons:nodedotjs"
  "mysql"             = "simple-icons:mysql"
  "postgresql"        = "simple-icons:postgresql"
  "express"           = "simple-icons:express"
  "reactnative"       = "logos:react"
  "expo"              = "simple-icons:expo"
  "sqlite"            = "simple-icons:sqlite"
  "github"            = "simple-icons:github"
  "visualstudiocode"  = "simple-icons:visualstudiocode"
  "figma"             = "simple-icons:figma"
  "canva"             = "simple-icons:canva"
  "postman"           = "simple-icons:postman"
  "googlegemini"      = "simple-icons:googlegemini"
  "groq"              = "logos:groq"
  "anthropic"         = "simple-icons:anthropic"
  "openai"            = "logos:openai-icon"
  "nativewind"        = "thesvg-color:nativewind"
  "jsonwebtokens"     = "simple-icons:jsonwebtokens"
  "bcrypt"            = "lucide:lock"
  "oauth"             = "tabler:brand-oauth"
  "auth0"             = "simple-icons:auth0"
  "opencode"          = "simple-icons:opencode"
  "googlecloud"       = "simple-icons:googlecloud"
}

foreach ($name in $icons.Keys) {
  $ref = $icons[$name]
  $parts = $ref.Split(":")
  $url = "https://api.iconify.design/$($parts[0])/$($parts[1]).svg"

  try {
    $svg = (Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30).Content
  } catch {
    Write-Output "FAIL  $name ($ref)"
    continue
  }

  # force single-color logos onto currentColor so they inherit the marquee text color
  $svg = [regex]::Replace($svg, 'fill="#[0-9a-fA-F]{6}"', 'fill="currentColor"')
  $svg = [regex]::Replace($svg, 'style="color:#[0-9a-fA-F]{6}"', 'style="color:currentColor"')

  Set-Content -Path (Join-Path $dest "$name.svg") -Value $svg -Encoding utf8 -NoNewline
  Write-Output "OK    $name ($ref)"
}