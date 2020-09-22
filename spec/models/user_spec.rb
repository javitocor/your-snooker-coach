require 'rails_helper'
require 'capybara/rspec'
RSpec.describe User, type: :model do
  context 'User associations tests' do
    it { should have_many(:trainings) }
  end
  context 'Validations for users' do
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username).ignoring_case_sensitivity }
  end
end
