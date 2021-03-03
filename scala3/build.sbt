
lazy val root = project
  .in(file("."))
  .settings(
    name := "parsing",
    version := "0.0.1",
    scalaVersion := "3.0.0-RC1",
    
    libraryDependencies += "com.lihaoyi" %% "pprint" % "0.6.1",

    libraryDependencies += "org.scalameta" %% "munit" % "0.7.22" % "test",
    testFrameworks += new TestFramework("munit.Framework"),
    Test / parallelExecution := false
  )
