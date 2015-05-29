class PagesController < ApplicationController
  def index

  end

  def super
    render params[:page].to_s
  end

end