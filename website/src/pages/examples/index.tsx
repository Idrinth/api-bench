import React from 'react';

const Examples = () => <div>
  <h1>Usage &amp; Examples</h1>
  <h2>Binaries</h2>
  <ul>
    <li>
          iabr (or run-benchmark) runs the current working directory's project
          if the routes folder is properly setup
      <ol>
        <li>Argument 1: threads (default 1)</li>
        <li>Argument 2: repetitions (default 1)</li>
        <li>Argument 3: language code (default en)</li>
      </ol>
    </li>

    <li>
          iabmp (or make-benchmark-project) creates a new benchmarking project
          in a subdirectory of the current working directory
      <ol>
        <li>Argument 1: project name (default: benchmark)</li>
      </ol>
    </li>
    <li>
          iabgfoa (or generate-benchmark-from-open-api) generates test skeletons
          from an open-api-documentation for a project in the current working
          directory
      <ol>Argument 1: path to the open-api-document</ol>
    </li>
  </ul>
  <h2>Programmatically</h2>
  <p>
        Basically require main/include main and supply the executor method with
        required parameters. Tasks defined in src/routes-subfolders before,
        before_task, before_each, main, after_each, after_task, and after will
        be used to automatically fill the Job processed by the executor.
        Automatic filling only happens when there are no tasks provided to the
        function.
  </p>
</div>;
export default Examples;