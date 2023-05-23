# Set the base image to use for your ASP.NET application
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src

# Copy the project file and restore dependencies
COPY server/*.csproj ./
RUN dotnet restore

# Copy the rest of the application source code
COPY server/ .

# Build the application
RUN dotnet build -c Release --no-restore

# Publish the application
RUN dotnet publish -c Release --no-restore -o /app/publish

# Set the base image for the final image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final

# Set the working directory
WORKDIR /app

# Copy the published application from the build image
COPY --from=build /app/publish .

# Expose the port that your ASP.NET application listens on
EXPOSE 80

# Set the entry point for your ASP.NET application
ENTRYPOINT ["dotnet", "server/bin/Debug/net7.0/HeroRandomizer.dll"]
