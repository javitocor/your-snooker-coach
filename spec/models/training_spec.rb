require 'rails_helper'
require 'capybara/rspec'
RSpec.describe Training, type: :model do
  context 'Training associations tests' do
    it { should have_many(:trainings) }
  end
  context 'Validations for trainings' do
    it { should validate_presence_of(:date) }
    it { should validate_presence_of(:location) }
    it { should validate_presence_of(:player_id) }
  end
end