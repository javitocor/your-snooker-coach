require 'rails_helper'
require 'capybara/rspec'
RSpec.describe 'Login and signup features', type: :feature do
  context 'login and logout' do
    let(:user) { User.create(id: '1', username: 'Peter', email: 'peter@example.com', password: 'password') }
    scenario 'login' do
      visit new_user_session_path
      fill_in 'user_email', with: user.email
      fill_in 'user_password', with: user.password
      click_button 'Log In'
      expect(page).to have_content('Signed in successfully')
    end
    scenario 'logout after login' do
      visit new_user_session_path
      fill_in 'user_email', with: user.email
      fill_in 'user_password', with: user.password
      click_button 'Log In'
      click_link 'Logout'
      expect(page).to have_content('Sign Up')
    end
    scenario 'validating email' do
      visit new_user_session_path
      fill_in 'user_email', with: 'thing@.com'
      fill_in 'user_password', with: user.password
      click_button 'Log In'
      expect(page).to have_content('Invalid Email or password.')
    end
    scenario 'validating password' do
      visit new_user_session_path
      fill_in 'user_email', with: user.email
      fill_in 'user_password', with: '56454'
      click_button 'Log In'
      expect(page).to have_content('Invalid Email or password.')
    end
  end
  context 'signup' do
    scenario 'signup' do
      visit new_user_registration_path
      fill_in 'user_username', with: 'Peter'
      fill_in 'user_email', with: 'peter@example.com'
      fill_in 'user_password', with: 'password'
      fill_in 'user_password_confirmation', with: 'password'
      click_button 'Sign up'
      expect(page).to have_content('Welcome!')
    end
    scenario 'fail signup' do
      visit new_user_registration_path
      click_button 'Sign up'
      expect(page).to have_content('errors prohibited')
    end
    scenario 'username validation' do
      visit new_user_registration_path
      fill_in 'user_email', with: 'peter@example.com'
      fill_in 'user_password', with: 'password'
      fill_in 'user_password_confirmation', with: 'password'
      click_button 'Sign up'
      expect(page).to have_content("Username can't be blank")
    end
    scenario 'email validation' do
      visit new_user_registration_path
      fill_in 'user_username', with: 'Peter'
      fill_in 'user_password', with: 'password'
      fill_in 'user_password_confirmation', with: 'password'
      click_button 'Sign up'
      expect(page).to have_content("Email can't be blank")
    end
    scenario 'password validation' do
      visit new_user_registration_path
      fill_in 'user_username', with: 'Peter'
      fill_in 'user_email', with: 'peter@example.com'
      click_button 'Sign up'
      expect(page).to have_content("Password can't be blank")
    end
    scenario 'Valid email' do
      visit new_user_registration_path
      fill_in 'user_username', with: 'Peter'
      fill_in 'user_email', with: 'peterexample.com'
      fill_in 'user_password', with: 'password'
      fill_in 'user_password_confirmation', with: 'password'
      click_button 'Sign up'
      expect(page).to have_content('Email is invalid')
    end
  end
end
