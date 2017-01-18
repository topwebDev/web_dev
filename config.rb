Time.zone = 'UTC'

# Templates

set :haml, { ugly: true, format: :html5 }

page '/feed.xml', layout: false
page '/sitemap.xml', layout: false
page '/robots.txt', layout: false

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Markdown settings
set :markdown_engine, :kramdown
set :markdown,
    layout_engine: :slim,
    tables: true,
    autolink: true,
    smartypants: true,
    input: 'GFM'

# Ignore stylesheet bundle because it is handled by webpack
ignore 'stylesheets/style'

# Build-specific configuration
configure :build do
  activate :minify_css  # For example, change the Compass output style for deployment
  activate :minify_javascript  # Minify Javascript on build
  activate :asset_hash  # Enable cache buster
  activate :relative_assets  # Use relative URLs
  # Or use a different image path
  # set :http_prefix, "/Content/images/"
  activate :gzip
end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"
  blog.layout = 'blog'
  # Permalink format
  blog.permalink = 'blog/{year}/{month}/{day}/{title}.html'
  # Matcher for blog source files
  blog.sources = 'posts/{year}-{month}-{day}-{title}.html'
  blog.summary_length = 250
  blog.default_extension = '.md'
  blog.tag_template = 'tag.html'
  blog.calendar_template = 'calendar.html'

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = 'page/{num}'
end

# Syntax highlight settings
activate :syntax

# Activate Directory Indexes
activate :directory_indexes

# Sprocket Asset Compilation
activate :sprockets
after_configuration do
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  Dir.glob(File.join("#{root}", @bower_config["directory"], "*", "fonts")) do |f|
    sprockets.append_path f
  end
  sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

activate :rsync do |rsync|
  rsync.production_server = "eduapp"
  # rsync.staging_server = "staging.myapp.com"
  rsync.path = '/var/www/tms/shared/public'
  rsync.user = "ubuntu"

  # Optional:
  # rsync.rsync_flags = "--compress --archive --delete -v"
  rsync.rsync_flags = "--compress --archive -v"
end
