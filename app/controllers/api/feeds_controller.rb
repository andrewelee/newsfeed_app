class Api::FeedsController < ApplicationController
  def index
    render :json => Feed.all, include: :latest_entries
  end

  def show
    render :json => Feed.find(params[:id]), include: :latest_entries
  end

  def create
    feed = Feed.find_or_create_by_url(feed_params[:url])

    if feed
      render :json => feed, include: :latest_entries
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def destroy
    feed = Feed.find(params[:id])

    if feed
      feed.destroy
      render :json => feed
    else
      render :json => { error: "failed to delete" }, status: :unprocessable_entity
    end
  end

  private

  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
