
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src

COPY *.csproj ./
RUN dotnet restore

COPY . .

RUN dotnet build -c Release --no-restore


RUN dotnet publish -c Release --no-restore -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:7.0-sdk AS final

WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 80

ENTRYPOINT ["dotnet", "./HeroRandomizer.csproj"]
