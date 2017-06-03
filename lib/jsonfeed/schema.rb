require 'json'

module JSONFeed
  SCHEMA = begin
    file = File.read(File.join(__dir__, '..', '..', 'schema-v1.json'))
    JSON.parse(file)
  end
end
