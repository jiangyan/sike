class TargetsController < ApplicationController
  
  def index 
    @targets = Target.all
    
  end
  
  def new
    @target = Target.new(:category => Category.find(1), :metadata => Metadata.find(1), :user_id => User.find(1), :status => "active")
    
  end
  
  def create
    @target = Target.new(params[:target])
    @last = Target.order("id desc").where("user_id = ?", 1).first
    
    if(@last != nil && @last.sequence_no != nil)
      @target.sequence_no = @last.sequence_no + 1
    else
      @target.sequence_no = 1
    end
    
    if @target.save
      redirect_to targets_url
    else
      render :action => :new
    end
    
  end
  
  def destroy
    @target.destroy

    redirect_to targets_url
  end
  
end
