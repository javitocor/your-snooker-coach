require 'faker'

FactoryBot.define do
  born_array = ["1959-02-09", "1978-05-10"]
  year = ["1992", "1998", "2000", "2002"]

factory :random_player, class: Player do
    name { Faker::FunnyName.name }
    nationality { Faker::Nation.nationality }
    ranking { Faker::Number.between(1, 35) }
    rate { Faker::Lorem.sentence }
    image { Faker::Internet.url }
    info { Faker::Lorem.sentence }
    born { born_array.sample }
    firstseason { year.sample }
  end
end