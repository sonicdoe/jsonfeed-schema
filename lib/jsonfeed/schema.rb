require 'json'

module JSONFeed
  SCHEMA_V1 = begin
    file = File.read(File.join(__dir__, '..', '..', 'schema-v1.json'))
    JSON.parse(file)
  end
  SCHEMA_V1_1 = begin
    file = File.read(File.join(__dir__, '..', '..', 'schema-v1.1.json'))
    JSON.parse(file)
  end

  SCHEMA = SCHEMA_V1_1
end
