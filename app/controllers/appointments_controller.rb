class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_service]


  # GET /appointments
  def index
    @appointments = Appointment.all

    render json: @appointments
  end

  # GET /appointments/1
  def show
    render json: @appointment, include: :services
  end

  # POST /appointments
  def create
    @service = Service.find(params[:service_id])
    @appointment = Appointment.new(appointment_params)
    @appointment.user = @current_user
    @appointment.service = @service

    if @appointment.save
      render json: @appointment, status: :created, location: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointments/1
  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointments/1
  def destroy
    @appointment.destroy
  end

  # # PUT /services/1/appointment/2
  # def add_service
  #   @appointment = Appointment.find(params[:id])
  #   @service = Service.find(params[:service_id])

  #   @appointment.service << @service

  #   render json: @appointment, include: :services
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def appointment_params
      params.require(:appointment).permit(:name, :date, :time, :user_id)
    end
end
